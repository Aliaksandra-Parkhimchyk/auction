/**
 * Created by Alexandra on 16.06.17.
 */

import * as types from '../actions/action-types';

const initialState = {
	currentUser: '',
	name: '',
	password: ''
};

const LoginLogoutReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.UPDATE_INPUT_NAME:
			return Object.assign({}, state, {
				name: action.name
			});

		case types.UPDATE_INPUT_PASSWORD:
			return Object.assign({}, state, {
				password: action.password
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
