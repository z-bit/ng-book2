import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product/product.model';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['../inventory.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];
  @Output() onProductWasSelected = new EventEmitter<Product>();
  private currentProduct: Product;

  constructor() { }
  ngOnInit() {}

  clicked(product: Product) {
    this.currentProduct = product;
    this.onProductWasSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}
