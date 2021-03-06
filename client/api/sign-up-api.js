/**
 * Created by Alexandra on 10.06.17.
 */

import axios from 'axios';
import store from '../store';
import * as actionCreators from '../actions/sign-up-actions';
import * as urlsConst from '../const/urls';

export function updateInputNameSignUpForm(name) {
	return store.dispatch(
		actionCreators.actionCreatorUpdateInputNameSignUpForm(name)
	);
}

export function updateInputEmailSignUpForm(email) {
	return store.dispatch(
		actionCreators.actionCreatorUpdateInputEmailSignUpForm(email)
	);
}

export function updateInputPasswordSignUpForm(password) {
	return store.dispatch(
		actionCreators.actionCreatorUpdateInputPasswordSignUpForm(password)
	);
}

export function updateInputPhoneSignUpForm(phone) {
	return store.dispatch(
		actionCreators.actionCreatorUpdateInputPhoneSignUpForm(phone)
	);
}

export function updateInputCitySignUpForm(city) {
	return store.dispatch(
		actionCreators.actionCreatorUpdateInputCitySignUpForm(city)
	);
}

export function updateInputStreetSignUpForm(street) {
	return store.dispatch(
		actionCreators.actionCreatorUpdateInputStreetSignUpForm(street)
	);
}

export function updateInputHouseSignUpForm(house) {
	return store.dispatch(
		actionCreators.actionCreatorUpdateInputHouseSignUpForm(house)
	);
}

export function updateInputApartmenSignUpForm(apartment) {
	return store.dispatch(
		actionCreators.actionCreatorUpdateInputApartmentSignUpForm(apartment)
	);
}

export function updateInputAccessSignUpForm(access) {
	return store.dispatch(
		actionCreators.actionCreatorUpdateInputAccessSignUpForm(access)
	);
}

export function updateInputFloorSignUpForm(floor) {
	return store.dispatch(
		actionCreators.actionCreatorUpdateInputFloorSignUpForm(floor)
	);
}

export function sendSignUpForm(sign_up_form) {
	let isThanksForRegistration = true;
	return axios
		.post(urlsConst.REGISTERED_USERS, sign_up_form)
		.then(() => {
			store.dispatch(
				actionCreators.actionCreatorSignUpForm(isThanksForRegistration)
			);
		})
		.catch(error => {
			alert(error.message);
		});
}

export function getRegisteredUsers() {
	return axios
		.get(urlsConst.REGISTERED_USERS)
		.then(response => {
			store.dispatch(
				actionCreators.actionCreatorGetRegisteredUsers(response.data)
			);
		})
		.catch(error => {
			alert(error.message);
		});
}
