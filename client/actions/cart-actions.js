/**
 * Created by Alexandra on 16.06.17.
 */

import * as types from '../actions/action-types';

export function actionCreatorGetCartSuccess(cart) {
	return {
		type: types.GET_CART_SUCCESS,
		cart: cart
	};
}

export function actionCreatorAddProductToCart(cart) {
	return {
		type: types.ADD_PRODUCT_TO_CART,
		cart: cart
	};
}

export function actionCreatorDeleteProductFromCart(cart) {
	return {
		type: types.ADD_PRODUCT_TO_CART,
		cart: cart
	};
}

export function actionCreatorGetTotalPrice(totalPrice) {
	return {
		type: types.GET_TOTAL_PRICE,
		totalPrice: totalPrice
	};
}
