/**
 * Created by Alexandra on 14.06.17.
 */

import axios from 'axios';
import store from '../store';
import * as actionCreators from '../actions/cart-actions';
import * as urlsConst from '../const/urls';
import _ from 'lodash';

export function addProductToCart(product, cart) {
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

	return store.dispatch(actionCreators.actionCreatorAddProductToCart(cart));
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
		return null;
	}

	cart.forEach(item => {
		return (totalPrice += item.num * item.price);
	});

	localStorage.setItem('totalPrice', totalPrice);

	return store.dispatch(actionCreators.actionCreatorGetTotalPrice(totalPrice));
}

export function sendOrderForm(
	name,
	email,
	phone,
	city,
	street,
	house,
	apartment,
	access,
	floor,
	additional_information,
	payment_the_internet,
	cut_pizza,
	order
) {
	let cart = [];
	let isThanksForPurchase = true;
	localStorage.removeItem('cart');
	return axios
		.post(urlsConst.FORMS, {
			name: name,
			email: email,
			phone: phone,
			city: city,
			street: street,
			house: house,
			apartment: apartment,
			access: access,
			floor: floor,
			additional_information: additional_information,
			payment_the_internet: payment_the_internet,
			cut_pizza: cut_pizza,
			order: order
		})
		.then(function(response) {
			store.dispatch(
				actionCreators.actionCreatorSendOrderForm(cart, isThanksForPurchase)
			);
		});
}

export function sendContactUsForm(name, email, query) {
	let isThanksForQuery = true;
	return axios
		.post(urlsConst.CONTACT_US_FORMS, {
			name: name,
			email: email,
			query: query
		})
		.then(function(response) {
			store.dispatch(
				actionCreators.actionCreatorSendContactUsForm(isThanksForQuery)
			);
		});
}
