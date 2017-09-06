/**
 * Created by Alexandra on 16.06.17.
 */

import * as types from '../actions/action-types';

const initialState = {
	login_form: {
		name: '',
		password: ''
	},
	currentUser: ''
};

const LoginLogoutReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.UPDATE_INPUT_NAME_LOGIN_FORM:
			return Object.assign({}, state, {
				login_form: Object.assign({}, state.login_form, {
					name: action.name
				})
			});

		case types.UPDATE_INPUT_PASSWORD_LOGIN_FORM:
			return Object.assign({}, state, {
				login_form: Object.assign({}, state.login_form, {
					password: action.password
				})
			});

		case types.LOGIN:
			return Object.assign({}, state, {
				currentUser: action.currentUser
			});

		case types.LOGOUT:
			return Object.assign({}, state, {
				currentUser: action.currentUser
			});

		case types.GET_CURRENT_USER:
			return Object.assign({}, state, {
				currentUser: action.currentUser
			});
	}

	return state;
};

export default LoginLogoutReducer;
