/**
 * Created by Alexandra on 16.06.17.
 */

import * as types from '../actions/action-types';

const initialState = {
	sign_up_form: {
		name: '',
		email: '',
		password: '',
		phone: '',
		city: '',
		street: '',
		house: '',
		apartment: '',
		access: '',
		floor: ''
	},
	isThanksForRegistration: false,
	registered_users: []
};

const signUpReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.UPDATE_INPUT_NAME_SIGN_UP_FORM:
			return Object.assign({}, state, {
				sign_up_form: Object.assign({}, state.sign_up_form, {
					name: action.name
				})
			});

		case types.UPDATE_INPUT_EMAIL_SIGN_UP_FORM:
			return Object.assign({}, state, {
				sign_up_form: Object.assign({}, state.sign_up_form, {
					email: action.email
				})
			});

		case types.UPDATE_INPUT_PASSWORD_SIGN_UP_FORM:
			return Object.assign({}, state, {
				sign_up_form: Object.assign({}, state.sign_up_form, {
					password: action.password
				})
			});

		case types.UPDATE_INPUT_PHONE_SIGN_UP_FORM:
			return Object.assign({}, state, {
				sign_up_form: Object.assign({}, state.sign_up_form, {
					phone: action.phone
				})
			});

		case types.UPDATE_INPUT_CITY_SIGN_UP_FORM:
			return Object.assign({}, state, {
				sign_up_form: Object.assign({}, state.sign_up_form, {
					city: action.city
				})
			});

		case types.UPDATE_INPUT_STREET_SIGN_UP_FORM:
			return Object.assign({}, state, {
				sign_up_form: Object.assign({}, state.sign_up_form, {
					street: action.street
				})
			});

		case types.UPDATE_INPUT_HOUSE_SIGN_UP_FORM:
			return Object.assign({}, state, {
				sign_up_form: Object.assign({}, state.sign_up_form, {
					house: action.house
				})
			});

		case types.UPDATE_INPUT_APARTMENT_SIGN_UP_FORM:
			return Object.assign({}, state, {
				sign_up_form: Object.assign({}, state.sign_up_form, {
					apartment: action.apartment
				})
			});

		case types.UPDATE_INPUT_ACCESS_SIGN_UP_FORM:
			return Object.assign({}, state, {
				sign_up_form: Object.assign({}, state.sign_up_form, {
					access: action.access
				})
			});

		case types.UPDATE_INPUT_FLOOR_SIGN_UP_FORM:
			return Object.assign({}, state, {
				sign_up_form: Object.assign({}, state.sign_up_form, {
					floor: action.floor
				})
			});

		case types.SIGN_UP_FORM:
			return Object.assign({}, state, {
				isThanksForRegistration: action.isThanksForRegistration
			});

		case types.GET_REGISTERED_USERS:
			return Object.assign({}, state, {
				registered_users: action.registered_users
			});
	}

	return state;
};

export default signUpReducer;
