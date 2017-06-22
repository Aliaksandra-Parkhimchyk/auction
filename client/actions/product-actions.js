/**
 * Created by Alexandra on 14.06.17.
 */

import * as types from '../actions/action-types';

export function actionCreatorGetProductsSuccess(products) {
	return {
		type: types.GET_PRODUCTS_SUCCESS,
		products: products,
		displayedProducts: products
	};
}

export function actionCreatorFilterBySize(displayedProducts) {
	return {
		type: types.FILTER_BY_SIZE,
		displayedProducts: displayedProducts
	};
}

export function actionCreatorFilterByIngredients(
	displayedProducts,
	ingredients
) {
	return {
		type: types.FILTER_BY_INGREDIENTS,
		displayedProducts: displayedProducts,
		ingredientsChecked: ingredients
	};
}

export function actionCreatorSearchProducts(displayedProducts) {
	return {
		type: types.SEARCH_PRODUCTS_SUCCESS,
		displayedProducts: displayedProducts
	};
}
