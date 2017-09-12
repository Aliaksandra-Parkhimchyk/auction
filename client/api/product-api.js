/**
 * Created by Alexandra on 14.06.17.
 */

import axios from 'axios';
import store from '../store';
import * as actionCreators from '../actions/product-actions';
import * as urlsConst from '../const/urls';

import _ from 'lodash';

export function getProducts() {
	const NUMBER_PIZZAS = 9;
	let products = [];

	return axios
		.get(urlsConst.PRODUCTS)
		.then(response => {
			response.data.forEach((item, i) => {
				if (i < NUMBER_PIZZAS) {
					products.push(item);
				}
			});

			store.dispatch(actionCreators.actionCreatorGetProducts(products));
		})
		.catch(error => {
			alert(error.message);
		});
}

export function getDisplayedProducts(products) {
	return store.dispatch(
		actionCreators.actionCreatorGetDisplayedProducts(products)
	);
}

export function filterBySize(event, value, products) {
	let displayedProducts = [];

	if (value === 'all') {
		displayedProducts = products;
	} else {
		displayedProducts = products.filter(el => {
			return el.size === value;
		});
	}

	return store.dispatch(
		actionCreators.actionCreatorFilterBySize(displayedProducts)
	);
}

export function filterByIngredients(name, products, ingredientsChecked) {
	if (!ingredientsChecked[name]) {
		ingredientsChecked[name] = true;
	} else {
		ingredientsChecked[name] = false;
	}

	let displayedProducts = products.filter(el => {
		let productChecked = true;
		for (let prop in ingredientsChecked) {
			if (
				ingredientsChecked.hasOwnProperty(prop) &&
				ingredientsChecked[prop] &&
				el.ingridients.indexOf(prop) === -1
			) {
				productChecked = false;
			}
		}
		return productChecked;
	});

	return store.dispatch(
		actionCreators.actionCreatorFilterByIngredients(
			displayedProducts,
			ingredientsChecked
		)
	);
}

export function changePriceFrom(priceFrom) {
	return store.dispatch(actionCreators.actionCreatorChangePriceFrom(priceFrom));
}
export function changePriceTo(priceTo) {
	return store.dispatch(actionCreators.actionCreatorChangePriceTo(priceTo));
}
export function filterByPrice(priceFrom, priceTo, products) {
	let displayedProducts = products.filter(el => {
		return el.price >= priceFrom && el.price <= priceTo;
	});

	return store.dispatch(
		actionCreators.actionCreatorFilterByPrice(displayedProducts)
	);
}

export function searchProducts(value, products) {
	let searchQuery = value.toLowerCase();

	let displayedProducts = products.filter(el => {
		let searchValue = el.title.toLowerCase();
		return searchValue.indexOf(searchQuery) !== -1;
	});

	return store.dispatch(
		actionCreators.actionCreatorSearchProducts(displayedProducts)
	);
}

export function increaseNumberProduct(id, numberOfProduct, products) {
	let obj = _.find(products, o => {
		return o.id === id;
	});

	obj.num = numberOfProduct;

	return store.dispatch(
		actionCreators.actionCreatorIncreaseNumberProduct(products)
	);
}
