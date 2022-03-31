import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  items :Product[] = Product.getProducts()

  constructor() { }

  ngOnInit(): void {
  }

  sendItemToCart(product:Product){
    
  }
}
