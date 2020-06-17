import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-ngrx2',
  templateUrl: './ngrx2.component.html',
  styleUrls: ['./ngrx2.component.scss']
})
export class Ngrx2Component implements OnInit {
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
