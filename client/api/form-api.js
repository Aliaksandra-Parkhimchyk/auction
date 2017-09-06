/**
 * Created by Alexandra on 30.06.17.
 */

import store from '../store';
import * as actionCreators from '../actions/form-actions';
import server from '../../server/server';

export function updateInputNameOrderForm(name) {
	return store.dispatch(
		actionCreators.actionCreatorUpdateInputNameOrderForm(name)
	);
}

export function updateInputEmailOrderForm(email) {
	return store.dispatch(
		actionCreators.actionCreatorUpdateInputEmailOrderForm(email)
	);
}

export function updateInputPhoneOrderForm(phone) {
	return store.dispatch(
		actionCreators.actionCreatorUpdateInputPhoneOrderForm(phone)
	);
}

export function updateInputCityOrderForm(city) {
	return store.dispatch(
		actionCreators.actionCreatorUpdateInputCityOrderForm(city)
	);
}

export function updateInputStreetOrderForm(street) {
	return store.dispatch(
		actionCreators.actionCreatorUpdateInputStreetOrderForm(street)
	);
}

export function updateInputHouseOrderForm(house) {
	return store.dispatch(
		actionCreators.actionCreatorUpdateInputHouseOrderForm(house)
	);
}

export function updateInputApartmentOrderForm(apartment) {
	return store.dispatch(
		actionCreators.actionCreatorUpdateInputApartmentOrderForm(apartment)
	);
}

export function updateInputAccessOrderForm(access) {
	return store.dispatch(
		actionCreators.actionCreatorUpdateInputAccessOrderForm(access)
	);
}

export function updateInputFloorOrderForm(floor) {
	return store.dispatch(
		actionCreators.actionCreatorUpdateInputFloorOrderForm(floor)
	);
}

export function updateInputAdditionalInformationOrderForm(
	additionalInformation
) {
	return store.dispatch(
		actionCreators.actionCreatorUpdateInputAdditionalInformationOrderForm(
			additionalInformation
		)
	);
}

export function changePaymentTheInternetOrderForm(paymentTheInternet) {
	return store.dispatch(
		actionCreators.actionCreatorChangePaymentTheInternetOrderForm(
			paymentTheInternet
		)
	);
}

export function checkCutPizzaOrderForm(isCheckCutPizza) {
	return store.dispatch(
		actionCreators.actionCreatorCheckCutPizzaOrderForm(isCheckCutPizza)
	);
}

export function addCard(card) {
	Stripe.setPublishableKey('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
	Stripe.card.createToken(card, (status, response) => {
		if (response.error) {
			alert('Adding card failed with error: ' + response.error.message);
		} else {
			const cardToken = response.id;
			console.log(cardToken);
			// server.saveCard(cardToken);
		}
	});
}

export function isRegistratedAndIsLogin(registered_users) {
	console.log(registered_users);
	let isRegistratedAndIsLogin = true;
	return store.dispatch(
		actionCreators.actionCreatorIsRegistratedAndIsLogin(isRegistratedAndIsLogin)
	);
}
