/**
 * Created by Alexandra on 16.06.17.
 */

import * as types from '../actions/action-types';

const initialState = {
	isThanksForRegistration: false
};

const signUpReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SIGN_UP_FORM:
			return Object.assign({}, state, {
				isThanksForRegistration: action.isThanksForRegistration
			});
	}

	return state;
};

export default signUpReducer;
