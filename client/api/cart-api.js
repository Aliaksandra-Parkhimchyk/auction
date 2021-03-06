/**
 * Created by Alexandra on 14.06.17.
 */

import axios from 'axios';
import store from '../store';
import * as actionCreators from '../actions/cart-actions';
import * as urlsConst from '../const/urls';
import _ from 'lodash';

export function getCart(cart) {
	if (!cart) {
		cart = [];
	}
	return store.dispatch(actionCreators.actionCreatorGetCart(cart));
}

export async function addProductToCart(product, cart) {
	let obj = _.find(cart, o => {
		return o.id === product.id;
	});

	if (!cart) {
		cart = [];
	}

	if (cart.length === 0 || !obj) {
		cart.push(product);
	} else {
		obj.num = product.num;
	}

	localStorage.setItem('cart', JSON.stringify(cart));

	return await store.dispatch(
		actionCreators.actionCreatorAddProductToCart(cart)
	);
}

export function deleteProductFromCart(product, cart) {
	let index = cart.indexOf(product);
	cart.splice(index, 1);

	localStorage.setItem('cart', JSON.stringify(cart));

	return store.dispatch(
		actionCreators.actionCreatorDeleteProductFromCart(cart)
	);
}

export function getTotalPrice(cart) {
	let totalPrice = 0;

	if (!cart) {
		localStorage.setItem('totalPrice', totalPrice);
		return;
	}

	cart.forEach(item => {
		return (totalPrice += item.num * item.price);
	});

	localStorage.setItem('totalPrice', totalPrice);

	return store.dispatch(actionCreators.actionCreatorGetTotalPrice(totalPrice));
}

export function sendOrderForm(form, order) {
	let cart = [];
	let isThanksForPurchase = true;
	localStorage.removeItem('cart');
	localStorage.removeItem('totalPrice');
	return axios
		.post(urlsConst.FORMS, {
			form: form,
			order: order
		})
		.then(() => {
			store.dispatch(
				actionCreators.actionCreatorSendOrderForm(cart, isThanksForPurchase)
			);
		})
		.catch(error => {
			alert(error.message);
		});
}
