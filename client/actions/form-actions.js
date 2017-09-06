/**
 * Created by Alexandra on 30.06.17.
 */

import * as types from '../actions/action-types';

export function actionCreatorUpdateInputNameOrderForm(name) {
	return {
		type: types.UPDATE_INPUT_NAME_ORDER_FORM,
		name
	};
}

export function actionCreatorUpdateInputEmailOrderForm(email) {
	return {
		type: types.UPDATE_INPUT_EMAIL_ORDER_FORM,
		email
	};
}

export function actionCreatorUpdateInputPhoneOrderForm(phone) {
	return {
		type: types.UPDATE_INPUT_PHONE_ORDER_FORM,
		phone
	};
}

export function actionCreatorUpdateInputCityOrderForm(city) {
	return {
		type: types.UPDATE_INPUT_CITY_ORDER_FORM,
		city
	};
}

export function actionCreatorUpdateInputStreetOrderForm(street) {
	return {
		type: types.UPDATE_INPUT_STREET_ORDER_FORM,
		street
	};
}

export function actionCreatorUpdateInputHouseOrderForm(house) {
	return {
		type: types.UPDATE_INPUT_HOUSE_ORDER_FORM,
		house
	};
}

export function actionCreatorUpdateInputApartmentOrderForm(apartment) {
	return {
		type: types.UPDATE_INPUT_APARTMENT_ORDER_FORM,
		apartment
	};
}

export function actionCreatorUpdateInputAccessOrderForm(access) {
	return {
		type: types.UPDATE_INPUT_ACCESS_ORDER_FORM,
		access
	};
}

export function actionCreatorUpdateInputFloorOrderForm(floor) {
	return {
		type: types.UPDATE_INPUT_FLOOR_ORDER_FORM,
		floor
	};
}

export function actionCreatorUpdateInputAdditionalInformationOrderForm(
	additionalInformation
) {
	return {
		type: types.UPDATE_INPUT_ADDITIONAL_INFORMATION_ORDER_FORM,
		additionalInformation
	};
}

export function actionCreatorChangePaymentTheInternetOrderForm(
	paymentTheInternet
) {
	return {
		type: types.CHANGE_PAYMENT_THE_INTERNET_ORDER_FORM,
		paymentTheInternet
	};
}

export function actionCreatorCheckCutPizzaOrderForm(isCheckCutPizza) {
	return {
		type: types.CHECK_CUT_PIZZA_ORDER_FORM,
		isCheckCutPizza
	};
}
