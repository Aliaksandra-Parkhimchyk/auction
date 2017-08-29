/**
 * Created by Alexandra on 10.07.17.
 */

import * as types from '../actions/action-types';

export function actionCreatorSignUpForm(isThanksForRegistration) {
	return {
		type: types.SIGN_UP_FORM,
		isThanksForRegistration
	};
}

export function actionCreatorGetRegisteredUsers(registered_users) {
	return {
		type: types.GET_REGISTERED_USERS,
		registered_users
	};
}
