import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.model';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['../../../inventory.component.css']
})
export class DepartmentComponent implements OnInit {
  @Input() product: Product;
  constructor() { }

  ngOnInit() {
  }

}
