import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['../../inventory.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() onProductSelected = new EventEmitter();
  constructor() { }
  ngOnInit() {}
  productWasSelected(product: Product) {
    console.log('Product clicked', product);
    this.onProductSelected.emit();
  }

}
