/**
 * Created by Alexandra on 14.06.17.
 */

import * as types from '../actions/action-types';

const initialState = {
	products: [],
	displayedProducts: [],
	ingredientsChecked: {
		beaf: false,
		chicken: false,
		pepper: false
	},
	priceFrom: '',
	priceTo: ''
};

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_PRODUCTS:
			return Object.assign({}, state, {
				products: action.products,
				displayedProducts: action.products
			});

		case types.GET_DISPLAYED_PRODUCTS:
			return Object.assign({}, state, {
				displayedProducts: action.displayedProducts
			});

		case types.FILTER_BY_SIZE:
			return Object.assign({}, state, {
				displayedProducts: action.displayedProducts
			});

		case types.FILTER_BY_INGREDIENTS:
			return Object.assign({}, state, {
				displayedProducts: action.displayedProducts,
				ingredientsChecked: action.ingredientsChecked
			});

		case types.CHANGE_PRICE_FROM:
			return Object.assign({}, state, {
				priceFrom: action.priceFrom
			});

		case types.CHANGE_PRICE_TO:
			return Object.assign({}, state, {
				priceTo: action.priceTo
			});

		case types.FILTER_BY_PRICE:
			return Object.assign({}, state, {
				displayedProducts: action.displayedProducts
			});

		case types.SEARCH_PRODUCTS:
			return Object.assign({}, state, {
				displayedProducts: action.displayedProducts
			});

		case types.INCREASE_NUMBER_PRODUCT:
			return Object.assign({}, state, {
				displayedProducts: action.displayedProducts
			});
	}

	return state;
};

export default productReducer;
