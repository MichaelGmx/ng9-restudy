import { CartState } from '../reducers/cart.reducer';
import { createSelector } from '@ngrx/store';

const selectCartSelector = (state: CartState) => state;

export const getProductList = createSelector(selectCartSelector, (state: CartState) => state.productList);

export const getCurrentCount = createSelector(selectCartSelector, (state: CartState) => state.productList.length);
