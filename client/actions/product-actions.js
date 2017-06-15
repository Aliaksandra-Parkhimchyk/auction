/**
 * Created by Alexandra on 14.06.17.
 */

import * as types from '../actions/action-types';

export function getProductsSuccess(products) {
    return {
        type: types.GET_PRODUCTS_SUCCESS,
        products
    };
}