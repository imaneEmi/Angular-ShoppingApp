import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() productItem!:Product
  @Output() productItemSelected = new EventEmitter<Product>()

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(product:Product){
    this.productItemSelected.emit(product)
  }
}
