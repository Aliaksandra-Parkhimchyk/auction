/**
 * Created by Alexandra on 14.06.17.
 */

import * as types from '../actions/action-types';

export function actionCreatorgetProductsSuccess(products) {
    return {
        type: types.GET_PRODUCTS_SUCCESS,
        products: products,
        displayedProducts: products
    };
}

export function actionCreatorfilterBySize(displayedProducts) {
    return {
        type: types.FILTER_BY_SIZE,
        displayedProducts: displayedProducts
    };
}

export function actionCreatorfilterByIngredients(displayedProducts, ingredients) {
    return {
        type: types.FILTER_BY_INGREDIENTS,
        displayedProducts: displayedProducts,
        ingredients: ingredients
    };
}

export function actionCreatorSearchProducts(displayedProducts) {
    return {
        type: types.SEARCH_PRODUCTS_SUCCESS,
        displayedProducts: displayedProducts
    };
}