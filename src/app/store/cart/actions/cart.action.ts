import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/types/product';

// export const AddProduct = createAction('[cart] Add product', props<{ product: Product }>());
// export const DelProduct = createAction('[cart] Delete product', props<{ product: Product }>());
export const SetProductList = createAction('[cart] Set productList', props<{ productList: Product[] }>());
export const SetCurrentCount = createAction('[cart] Set currentCount', props<{ currentCount: number }>());
