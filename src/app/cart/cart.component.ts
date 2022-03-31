import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  qteCommande: number = 1
  selectedItems: Product[] = []
  constructor() { }

  ngOnInit(): void {
  }
  substruct() {
    if(this.qteCommande<=1){
      this.qteCommande=1
    }
    else{this.qteCommande -= 1;}
  }

  add(){
    this.qteCommande += 1;
  }

}
