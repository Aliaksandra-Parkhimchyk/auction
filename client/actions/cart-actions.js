/**
 * Created by Alexandra on 16.06.17.
 */

import * as types from '../actions/action-types';

export function getCart(cart) {
	return {
		type: types.GET_CART,
		cart
	};
}

export function actionCreatorAddProductToCart(cart) {
	return {
		type: types.ADD_PRODUCT_TO_CART,
		cart
	};
}

export function actionCreatorDeleteProductFromCart(cart) {
	return {
		type: types.DELETE_PRODUCT_FROM_CART,
		cart
	};
}

export function actionCreatorGetTotalPrice(totalPrice) {
	return {
		type: types.GET_TOTAL_PRICE,
		totalPrice
	};
}

export function actionCreatorSendOrderForm(cart, isThanksForPurchase) {
	return {
		type: types.SEND_ORDER_FORM,
		cart,
		isThanksForPurchase
	};
}
