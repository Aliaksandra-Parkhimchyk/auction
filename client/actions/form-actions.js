/**
 * Created by Alexandra on 30.06.17.
 */

import * as types from '../actions/action-types';

export function actionCreatorUpdateInputName(name) {
	return {
		type: types.UPDATE_INPUT_NAME,
		name: name
	};
}

export function actionCreatorUpdateInputEmail(email) {
	return {
		type: types.UPDATE_INPUT_EMAIL,
		email: email
	};
}
export function actionCreatorUpdateInputPhone(phone) {
	return {
		type: types.UPDATE_INPUT_PHONE,
		phone: phone
	};
}
export function actionCreatorUpdateInputCity(city) {
	return {
		type: types.UPDATE_INPUT_CITY,
		city: city
	};
}

export function actionCreatorUpdateInputStreet(street) {
	return {
		type: types.UPDATE_INPUT_STREET,
		street: street
	};
}

export function actionCreatorUpdateInputHouse(house) {
	return {
		type: types.UPDATE_INPUT_HOUSE,
		house: house
	};
}

export function actionCreatorUpdateInputApartment(apartment) {
	return {
		type: types.UPDATE_INPUT_APARTMENT,
		apartment: apartment
	};
}

export function actionCreatorUpdateInputAccess(access) {
	return {
		type: types.UPDATE_INPUT_ACCESS,
		access: access
	};
}

export function actionCreatorUpdateInputFloor(floor) {
	return {
		type: types.UPDATE_INPUT_FLOOR,
		floor: floor
	};
}

export function actionCreatorUpdateInputAdditionalInformation(
	additionalInformation
) {
	return {
		type: types.UPDATE_INPUT_ADDITIONAL_INFORMATION,
		additionalInformation: additionalInformation
	};
}

export function actionCreatorChangePaymentTheInternet(paymentTheInternet) {
	return {
		type: types.CHANGE_PAYMENT_THE_INTERNET,
		paymentTheInternet: paymentTheInternet
	};
}

export function actionCreatorCheckCutPizza(isCheckCutPizza) {
	return {
		type: types.CHECK_CUT_PIZZA,
		isCheckCutPizza: isCheckCutPizza
	};
}
