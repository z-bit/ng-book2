import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['../../../inventory.component.css', '../product.component.css']
})
export class ImageComponent implements OnInit {
  @Input() url: string;
  constructor() { }

  ngOnInit() {
  }

}
