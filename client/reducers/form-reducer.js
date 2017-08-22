/**
 * Created by Alexandra on 30.06.17.
 */

import * as types from '../actions/action-types';

const initialState = {
	form: {
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
	}
};

const formReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.UPDATE_INPUT_NAME:
			return Object.assign({}, state, {
				form: Object.assign({}, state.form, {
					name: action.name
				})
			});

		case types.UPDATE_INPUT_EMAIL:
			return Object.assign({}, state, {
				form: Object.assign({}, state.form, {
					email: action.email
				})
			});

		case types.UPDATE_INPUT_PHONE:
			return Object.assign({}, state, {
				form: Object.assign({}, state.form, {
					phone: action.phone
				})
			});

		case types.UPDATE_INPUT_CITY:
			return Object.assign({}, state, {
				form: Object.assign({}, state.form, {
					city: action.city
				})
			});

		case types.UPDATE_INPUT_STREET:
			return Object.assign({}, state, {
				form: Object.assign({}, state.form, {
					street: action.street
				})
			});

		case types.UPDATE_INPUT_APARTMENT:
			return Object.assign({}, state, {
				form: Object.assign({}, state.form, {
					apartment: action.apartment
				})
			});

		case types.UPDATE_INPUT_ACCESS:
			return Object.assign({}, state, {
				form: Object.assign({}, state.form, {
					access: action.access
				})
			});

		case types.UPDATE_INPUT_FLOOR:
			return Object.assign({}, state, {
				form: Object.assign({}, state.form, {
					floor: action.floor
				})
			});

		case types.UPDATE_INPUT_ADDITIONAL_INFORMATION:
			return Object.assign({}, state, {
				form: Object.assign({}, state.form, {
					additionalInformation: action.additionalInformation
				})
			});

		case types.CHANGE_PAYMENT_THE_INTERNET:
			return Object.assign({}, state, {
				form: Object.assign({}, state.form, {
					paymentTheInternet: action.paymentTheInternet
				})
			});

		case types.CHECK_CUT_PIZZA:
			return Object.assign({}, state, {
				form: Object.assign({}, state.form, {
					isCheckCutPizza: action.isCheckCutPizza
				})
			});
	}

	return state;
};

export default formReducer;
