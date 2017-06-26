/**
 * Created by Alexandra on 14.06.17.
 */

import store from '../store';
import * as actionCreators from '../actions/cart-actions';
import _ from 'lodash';

export function getCart(cart) {
	return store.dispatch(actionCreators.actionCreatorGetCartSuccess(cart));
}

export function addProductToCart(product, cart) {
	let obj = _.find(cart, o => {
		return o.id === product.id;
	});

	if (cart.length === 0 || !obj) {
		cart.push(product);
	} else {
		obj.num = product.num;
	}

	return store.dispatch(actionCreators.actionCreatorAddProductToCart(cart));
}

export function deleteProductFromCart(product, cart) {
	let index = cart.indexOf(product);
	cart.splice(index, 1);

	return store.dispatch(actionCreators.actionCreatorDeleteProductFromCart(cart));
}


