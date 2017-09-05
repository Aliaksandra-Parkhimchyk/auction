/**
 * Created by Alexandra on 05.09.17.
 */

import axios from 'axios';
import store from '../store';
import * as actionCreators from '../actions/contact-us-actions';
import * as urlsConst from '../const/urls';

export function updateInputNameContactUsForm(name) {
	return store.dispatch(
		actionCreators.actionCreatorUpdateInputNameContactUsForm(name)
	);
}

export function updateInputEmailContactUsForm(email) {
	return store.dispatch(
		actionCreators.actionCreatorUpdateInputEmailContactUsForm(email)
	);
}

export function updateInputQueryContactUsForm(query) {
	return store.dispatch(
		actionCreators.actionCreatorUpdateInputQueryContactUsForm(query)
	);
}

export function sendContactUsForm(contact_us_form) {
	let isThanksForQuery = true;
	return axios
		.post(urlsConst.CONTACT_US_FORMS, contact_us_form)
		.then(function(response) {
			store.dispatch(
				actionCreators.actionCreatorSendContactUsForm(isThanksForQuery)
			);
		});
}
