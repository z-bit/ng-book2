import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['../../../inventory.component.css']
})
export class PriceComponent implements OnInit {
  @Input() price: number;
  constructor() { }

  ngOnInit() {
  }

}
