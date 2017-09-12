/**
 * Created by Alexandra on 10.07.17.
 */

import * as types from '../actions/action-types';

export function actionCreatorUpdateInputNameSignUpForm(name) {
	return {
		type: types.UPDATE_INPUT_NAME_SIGN_UP_FORM,
		name
	};
}

export function actionCreatorUpdateInputEmailSignUpForm(email) {
	return {
		type: types.UPDATE_INPUT_EMAIL_SIGN_UP_FORM,
		email
	};
}

export function actionCreatorUpdateInputPasswordSignUpForm(password) {
	return {
		type: types.UPDATE_INPUT_PASSWORD_SIGN_UP_FORM,
		password
	};
}

export function actionCreatorUpdateInputPhoneSignUpForm(phone) {
	return {
		type: types.UPDATE_INPUT_PHONE_SIGN_UP_FORM,
		phone
	};
}

export function actionCreatorUpdateInputCitySignUpForm(city) {
	return {
		type: types.UPDATE_INPUT_CITY_SIGN_UP_FORM,
		city
	};
}

export function actionCreatorUpdateInputStreetSignUpForm(street) {
	return {
		type: types.UPDATE_INPUT_STREET_SIGN_UP_FORM,
		street
	};
}

export function actionCreatorUpdateInputHouseSignUpForm(house) {
	return {
		type: types.UPDATE_INPUT_HOUSE_SIGN_UP_FORM,
		house
	};
}

export function actionCreatorUpdateInputApartmentSignUpForm(apartment) {
	return {
		type: types.UPDATE_INPUT_APARTMENT_SIGN_UP_FORM,
		apartment
	};
}

export function actionCreatorUpdateInputAccessSignUpForm(access) {
	return {
		type: types.UPDATE_INPUT_ACCESS_SIGN_UP_FORM,
		access
	};
}

export function actionCreatorUpdateInputFloorSignUpForm(floor) {
	return {
		type: types.UPDATE_INPUT_FLOOR_SIGN_UP_FORM,
		floor
	};
}

export function actionCreatorSignUpForm(isThanksForRegistration) {
	return {
		type: types.SIGN_UP_FORM,
		isThanksForRegistration
	};
}

export function actionCreatorGetRegisteredUsers(registered_users) {
	return {
		type: types.GET_REGISTERED_USERS,
		registered_users
	};
}
