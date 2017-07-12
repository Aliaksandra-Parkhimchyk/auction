/**
 * Created by Alexandra on 10.06.17.
 */

import axios from 'axios';
import store from '../store';
import * as actionCreators from '../actions/sign-up-actions';

export function sendSignUpForm(
	name,
	email,
	phone,
	city,
	street,
	house,
	apartment,
	access,
	floor,
	password
) {
	let isThanksForRegistration = true;
	return axios
		.post(
			'https://api.mlab.com/api/1/databases/pizzashop/collections/registered_users?apiKey=9BGZZA0zukVJrmfAYnnLeG7V2DiUQNY_',
			{
				name: name,
				email: email,
				phone: phone,
				city: city,
				street: street,
				house: house,
				apartment: apartment,
				access: access,
				floor: floor,
				password: password
			}
		)
		.then(function(response) {
			store.dispatch(
				actionCreators.actionCreatorSignUpForm(isThanksForRegistration)
			);
		});
}

export function getRegisteredUsers() {
	return axios
		.get(
			'https://api.mlab.com/api/1/databases/pizzashop/collections/registered_users?apiKey=9BGZZA0zukVJrmfAYnnLeG7V2DiUQNY_'
		)
		.then(response => {
			store.dispatch(
				actionCreators.actionCreatorGetRegisteredUsers(response.data)
			);
			return response.data;
		});
}
