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

export function actionCreatorGetDisplayedProductsSuccess(products) {
	return {
		type: types.GET_DISPLAYED_PRODUCTS_SUCCESS,
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

export function actionCreatorChangePriceFrom(priceFrom) {
	return {
		type: types.CHANGE_PRICE_FROM,
		priceFrom: priceFrom
	};
}

export function actionCreatorChangePriceTo(priceTo) {
	return {
		type: types.CHANGE_PRICE_TO,
		priceTo: priceTo
	};
}

export function actionCreatorFilterByPrice(displayedProducts) {
	return {
		type: types.FILTER_BY_PRICE,
		displayedProducts: displayedProducts
	};
}

export function actionCreatorSearchProducts(displayedProducts) {
	return {
		type: types.SEARCH_PRODUCTS_SUCCESS,
		displayedProducts: displayedProducts
	};
}

export function actionCreatorIncreaseNumberProduct(displayedProducts) {
	return {
		type: types.INCREASE_NUMBER_PRODUCT,
		displayedProducts: displayedProducts
	};
}
