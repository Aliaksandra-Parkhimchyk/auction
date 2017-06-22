/**
 * Created by Alexandra on 14.06.17.
 */

import store from '../store';
import * as actionCreators from '../actions/cart-actions';

export function getCart(cart) {
	return store.dispatch(actionCreators.actionCreatorGetCartSuccess(cart));
}

export function addProductToCart(product, cart) {
	cart.push(product);

	console.log(cart);

	return store.dispatch(actionCreators.actionCreatorAddProductToCart(cart));
}
