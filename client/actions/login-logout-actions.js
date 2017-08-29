/**
 * Created by Alexandra on 10.07.17.
 */

import * as types from '../actions/action-types';

export function actionCreatorLogin(currentUser) {
	return {
		type: types.LOGIN,
		currentUser
	};
}

export function actionCreatorLogout(currentUser) {
	return {
		type: types.LOGOUT,
		currentUser
	};
}

export function actionCreatorGetCurrentUser(currentUser) {
	return {
		type: types.GET_CURRENT_USER,
		currentUser
	};
}
