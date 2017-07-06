/**
 * Created by Alexandra on 30.06.17.
 */

import store from '../store';
import * as actionCreators from '../actions/form-actions';

export function updateInputName(name) {
	return store.dispatch(actionCreators.actionCreatorUpdateInputName(name));
}

export function updateInputEmail(email) {
	return store.dispatch(actionCreators.actionCreatorUpdateInputEmail(email));
}

export function updateInputPhone(phone) {
	return store.dispatch(actionCreators.actionCreatorUpdateInputPhone(phone));
}

export function updateInputCity(city) {
	return store.dispatch(actionCreators.actionCreatorUpdateInputCity(city));
}

export function updateInputStreet(street) {
	return store.dispatch(actionCreators.actionCreatorUpdateInputStreet(street));
}

export function updateInputHouse(house) {
	return store.dispatch(actionCreators.actionCreatorUpdateInputHouse(house));
}

export function updateInputApartment(apartment) {
	return store.dispatch(
		actionCreators.actionCreatorUpdateInputApartment(apartment)
	);
}

export function updateInputAccess(access) {
	return store.dispatch(actionCreators.actionCreatorUpdateInputAccess(access));
}

export function updateInputFloor(floor) {
	return store.dispatch(actionCreators.actionCreatorUpdateInputFloor(floor));
}

export function updateInputAdditionalInformation(additionalInformation) {
	return store.dispatch(
		actionCreators.actionCreatorUpdateInputAdditionalInformation(
			additionalInformation
		)
	);
}

export function changePaymentTheInternet(paymentTheInternet) {
	return store.dispatch(
		actionCreators.actionCreatorChangePaymentTheInternet(paymentTheInternet)
	);
}

export function checkCutPizza(isCheckCutPizza) {
	return store.dispatch(
		actionCreators.actionCreatorCheckCutPizza(isCheckCutPizza)
	);
}
