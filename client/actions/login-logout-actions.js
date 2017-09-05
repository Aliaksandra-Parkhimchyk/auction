/**
 * Created by Alexandra on 10.07.17.
 */

import * as types from '../actions/action-types';

export function actionCreatorUpdateInputNameLoginForm(name) {
    return {
        type: types.UPDATE_INPUT_NAME_LOGIN_FORM,
        name
    };
}

export function actionCreatorUpdateInputPasswordLoginForm(password) {
    return {
        type: types.UPDATE_INPUT_PASSWORD_LOGIN_FORM,
        password
    };
}

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
