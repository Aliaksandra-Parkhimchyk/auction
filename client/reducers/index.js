/**
 * Created by Alexandra on 14.06.17.
 */

import { combineReducers } from 'redux';

import productReducer from './product-reducer';

const reducers = combineReducers({
    productState: productReducer
});

export default reducers;