/**
 * Created by Alexandra on 16.06.17.
 */

import * as types from '../actions/action-types';

const initialState = {
	isLogin: false,
	currentUser: ''
};

const LoginLogoutReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.LOGIN:
			return Object.assign({}, state, {
				isLogin: action.isLogin
			});

		case types.LOGOUT:
			return Object.assign({}, state, {
				isLogin: action.isLogin
			});

		case types.GET_CURRENT_USER:
			return Object.assign({}, state, {
				currentUser: action.currentUser
			});
	}

	return state;
};

export default LoginLogoutReducer;
