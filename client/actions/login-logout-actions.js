/**
 * Created by Alexandra on 10.07.17.
 */

import * as types from '../actions/action-types';

export function actionCreatorLogin(isLogin) {
	return {
		type: types.LOGIN,
		isLogin: isLogin
	};
}

export function actionCreatorLogout(isLogin) {
	return {
		type: types.LOGOUT,
		isLogin: isLogin
	};
}

export function actionCreatorGetCurrentUser(currentUser) {
	return {
		type: types.GET_CURRENT_USER,
		currentUser: currentUser
	};
}
