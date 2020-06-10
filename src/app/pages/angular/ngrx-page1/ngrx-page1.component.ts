import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CartStoreModule } from 'src/app/store/cart/cart.store.module';
import { getProductList, getCurrentCount } from 'src/app/store/cart/selector/cart.selector';
import { Product } from 'src/app/types/product';
import { SetProductList, SetCurrentCount } from 'src/app/store/cart/actions/cart.action';
import { deepCopyArray } from 'src/app/utils/array';

@Component({
  selector: 'app-ngrx-page1',
  templateUrl: './ngrx-page1.component.html',
  styleUrls: ['./ngrx-page1.component.scss']
})
export class NgrxPage1Component implements OnInit {
  productList: Product[] = [
    { PLU: 'AAA', DesciName: 'AAA商品', Qty: 0 },
    { PLU: 'BBB', DesciName: 'BBB商品', Qty: 0 },
    { PLU: 'CCC', DesciName: 'CCC商品', Qty: 0 }
  ];

  cartProductList: Product[];
  currentCount: number;

  constructor(
    private store$: Store<CartStoreModule>
  ) {
    const cartStore$ = this.store$.pipe(select('cart'));
    // this.store$.pipe(select(getProductList)).subscribe(list => {
    //   this.watchProductList(list);
    // });
    // this.store$.pipe(select(getCurrentCount)).subscribe(count => {
    //   this.watchCurrentCout(count);
    // });

    const stateArr = [{
      type: getProductList,
      cb: list => this.watchProductList(list)
    }, {
      type: getCurrentCount,
      cb: count => this.watchCurrentCout(count)
    }];
    stateArr.forEach(item => {
      cartStore$.pipe(select(item.type)).subscribe(item.cb);
    });
  }

  ngOnInit(): void {
  }

  // 商品 加入购物车
  addProductToCart(product: Product) {
    const tmpList = deepCopyArray(this.cartProductList);
    const tmpProduct = JSON.parse(JSON.stringify(product));
    if (tmpList.length > 0) {
      const findOne = tmpList.find(item => item.PLU === tmpProduct.PLU);
      if (findOne) {
        findOne.Qty++;
      } else {
        tmpProduct.Qty++;
        tmpList.push(tmpProduct);
      }
    } else {
      tmpProduct.Qty++;
      tmpList.push(tmpProduct);
    }

    this.store$.dispatch(SetProductList({ productList: tmpList }));
  }

  clearCart() {
    this.store$.dispatch(SetProductList({ productList: [] }));
  }

  private watchProductList(list: Product[]) {
    console.log('购物车内商品列表：', list);
    this.cartProductList = list;
  }

  private watchCurrentCout(count: number) {
    console.log('购物车内商品种类计数：', count);
    this.currentCount = count;
  }

}
