/**
 * Created by Alexandra on 10.06.17.
 */

import axios from 'axios';
import store from '../store';
import * as actionCreators from '../actions/sign-up-actions';
import * as urlsConst from '../const/urls';

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
		.post(urlsConst.REGISTERED_USERS, {
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
		})
		.then(function(response) {
			store.dispatch(
				actionCreators.actionCreatorSignUpForm(isThanksForRegistration)
			);
		});
}

export function getRegisteredUsers() {
	return axios.get(urlsConst.REGISTERED_USERS).then(response => {
		store.dispatch(
			actionCreators.actionCreatorGetRegisteredUsers(response.data)
		);
		return response.data;
	});
}
