import { Component, OnInit } from '@angular/core';

class SearchResult {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  
  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.title = obj && obj.title || null;
    this.description = obj && obj.description || null;
    this.thumbnailUrl = obj && obj.thumbnailUrl || null;
    this.videoUrl = obj && obj.videoUrl
      || `https://www.youtube.com/watch?v=${this.id}`;
  }
}

@Component({
  selector: 'app-you-tube-search',
  templateUrl: './you-tube-search.component.html',
  styleUrls: ['./you-tube-search.component.css']
})
export class YouTubeSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
