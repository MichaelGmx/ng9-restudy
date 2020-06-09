import { createReducer, Action, on } from '@ngrx/store';
import { Product } from 'src/app/types/product';
import { SetProductList, SetCurrentCount } from '../actions/cart.action';

export type CartState = {
  productList: Product[];
  currentCount: number;
};

export const initalState: CartState = {
  productList: [],
  currentCount: 0
};

const reducer = createReducer(
  initalState,
  // on(AddProduct, (state, { product }) => ({ ...state, product })),
  // on(DelProduct, (state, { product }) => ({ ...state, product })),
  on(SetProductList, (state, { productList }) => ({ ...state, productList })),
  on(SetCurrentCount, (state, { currentCount }) => ({ ...state, currentCount }))
);

export function cartReducer(state: CartState, action: Action) {
  return reducer(state, action);
}
