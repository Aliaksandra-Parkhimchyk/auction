/**
 * Created by Alexandra on 16.06.17.
 */

import * as types from '../actions/action-types';

const initialState = {
	isThanksForRegistration: false,
	registered_users: []
};

const signUpReducer = (state = initialState, action) => {
	switch (action.type) {
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
