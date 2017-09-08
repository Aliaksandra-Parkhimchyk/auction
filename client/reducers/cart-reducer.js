/**
 * Created by Alexandra on 16.06.17.
 */

import * as types from '../actions/action-types';

const initialState = {
	cart: JSON.parse(localStorage.getItem('cart')),
	totalPrice: localStorage.getItem('totalPrice'),
	isThanksForPurchase: false
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_CART:
			return Object.assign({}, state, { cart: action.cart });

		case types.ADD_PRODUCT_TO_CART:
			return Object.assign({}, state, { cart: action.cart });

		case types.DELETE_PRODUCT_FROM_CART:
			return Object.assign({}, state, { cart: action.cart });

		case types.GET_TOTAL_PRICE:
			return Object.assign({}, state, { totalPrice: action.totalPrice });

		case types.SEND_ORDER_FORM:
			return Object.assign({}, state, {
				cart: action.cart,
				isThanksForPurchase: action.isThanksForPurchase
			});
	}

	return state;
};

export default cartReducer;
