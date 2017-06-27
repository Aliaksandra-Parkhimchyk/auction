/**
 * Created by Alexandra on 16.06.17.
 */

import * as types from '../actions/action-types';

const initialState = {
	cart: [],
	totalPrice: 0
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_CART_SUCCESS:
			return Object.assign({}, state, { cart: action.cart });

		case types.ADD_PRODUCT_TO_CART:
			return Object.assign({}, state, { cart: action.cart });

		case types.DELETE_PRODUCT_FROM_CART:
			return Object.assign({}, state, { cart: action.cart });

		case types.GET_TOTAL_PRICE:
			return Object.assign({}, state, { totalPrice: action.totalPrice });
	}

	return state;
};

export default cartReducer;
