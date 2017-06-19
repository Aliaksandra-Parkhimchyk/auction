/**
 * Created by Alexandra on 14.06.17.
 */

import { combineReducers } from 'redux';

import productReducer from './product-reducer';
import cartReducer from './cart-reducer';

const reducers = combineReducers({
    productState: productReducer,
    cartState: cartReducer
});

export default reducers;