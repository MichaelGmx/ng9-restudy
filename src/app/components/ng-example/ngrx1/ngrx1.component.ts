import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-ngrx1',
  templateUrl: './ngrx1.component.html',
  styleUrls: ['./ngrx1.component.scss']
})
export class Ngrx1Component implements OnInit {
  @Input() productList: Product[];
  @Input() cartList: Product[];
  @Input() cartCount: number;

  @Output() addToCart = new EventEmitter<Product>();
  @Output() clearCart = new EventEmitter<void>();

  constructor( ) { }

  ngOnInit(): void { }

  clickAddBtn(product: Product) {
    this.addToCart.emit(product);
  }

  clickClearBtn() {
    this.clearCart.emit();
  }

}
