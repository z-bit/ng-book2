import { Component, OnInit, EventEmitter, ElementRef, Output } from '@angular/core';
import { SearchResult, YouTubeService } from '../you-tube-search.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(
      private youtube: YouTubeService,
      private el: ElementRef
  ) { }

  ngOnInit(): void {
    // convert keyup event into observable stream
    Observable
        .fromEvent(this.el.nativeElement, 'keyup')
        .map( (e: any) => e.target.value )            // extract value of input
        .filter( (text: string) => text.length > 1 )  // skip empty value
  //      .do( (text: string) => console.log('text: ', text) )
        .debounceTime(250)                            // only once every 250 ms
        .do( () => this.loading.next(true) )          // enable loading
        .map( (query: string) => this.youtube.search(query) ) // search
        .switch()                                     // discarding older events if new input comes in
        .subscribe(
            // on success
            (results: SearchResult[]) => {
                this.loading.next(false);
                this.results.next(results);
            },
            // on errror
            (err: any) => {
                this.loading.next(false);
                console.log(err);
            },
            // on completion
            () => {
                this.loading.next(false);
            }
        )

    }
}
