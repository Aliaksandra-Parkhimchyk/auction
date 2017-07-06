/**
 * Created by Alexandra on 30.06.17.
 */

import * as types from '../actions/action-types';

const initialState = {
	name: '',
	email: '',
	phone: '',
	city: '',
	street: '',
	house: '',
	apartment: '',
	access: '',
	floor: '',
	additionalInformation: '',
	paymentTheInternet: '1',
	isCheckCutPizza: false
};

const formReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.UPDATE_INPUT_NAME:
			return Object.assign({}, state, { name: action.name });

		case types.UPDATE_INPUT_EMAIL:
			return Object.assign({}, state, { email: action.email });

		case types.UPDATE_INPUT_PHONE:
			return Object.assign({}, state, { phone: action.phone });

		case types.UPDATE_INPUT_CITY:
			return Object.assign({}, state, { city: action.city });

		case types.UPDATE_INPUT_STREET:
			return Object.assign({}, state, { street: action.street });

		case types.UPDATE_INPUT_HOUSE:
			return Object.assign({}, state, { house: action.house });

		case types.UPDATE_INPUT_APARTMENT:
			return Object.assign({}, state, { apartment: action.apartment });

		case types.UPDATE_INPUT_ACCESS:
			return Object.assign({}, state, { access: action.access });

		case types.UPDATE_INPUT_FLOOR:
			return Object.assign({}, state, { floor: action.floor });

		case types.UPDATE_INPUT_ADDITIONAL_INFORMATION:
			return Object.assign({}, state, {
				additionalInformation: action.additionalInformation
			});

		case types.CHANGE_PAYMENT_THE_INTERNET:
			return Object.assign({}, state, {
				paymentTheInternet: action.paymentTheInternet
			});

		case types.CHECK_CUT_PIZZA:
			return Object.assign({}, state, {
				isCheckCutPizza: action.isCheckCutPizza
			});
	}

	return state;
};

export default formReducer;
