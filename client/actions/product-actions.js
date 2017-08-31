/**
 * Created by Alexandra on 14.06.17.
 */

import * as types from '../actions/action-types';

export function actionCreatorGetProducts(products) {
	return {
		type: types.GET_PRODUCTS,
		displayedProducts: products,
		products
	};
}

export function actionCreatorGetDisplayedProducts(products) {
	return {
		type: types.GET_DISPLAYED_PRODUCTS,
		displayedProducts: products
	};
}

export function actionCreatorFilterBySize(displayedProducts) {
	return {
		type: types.FILTER_BY_SIZE,
		displayedProducts
	};
}

export function actionCreatorFilterByIngredients(
	displayedProducts,
	ingredients
) {
	return {
		type: types.FILTER_BY_INGREDIENTS,
		ingredientsChecked: ingredients,
		displayedProducts
	};
}

export function actionCreatorChangePriceFrom(priceFrom) {
	return {
		type: types.CHANGE_PRICE_FROM,
		priceFrom
	};
}

export function actionCreatorChangePriceTo(priceTo) {
	return {
		type: types.CHANGE_PRICE_TO,
		priceTo
	};
}

export function actionCreatorFilterByPrice(displayedProducts) {
	return {
		type: types.FILTER_BY_PRICE,
		displayedProducts
	};
}

export function actionCreatorSearchProducts(displayedProducts) {
	return {
		type: types.SEARCH_PRODUCTS,
		displayedProducts
	};
}

export function actionCreatorIncreaseNumberProduct(displayedProducts) {
	return {
		type: types.INCREASE_NUMBER_PRODUCT,
		displayedProducts
	};
}
