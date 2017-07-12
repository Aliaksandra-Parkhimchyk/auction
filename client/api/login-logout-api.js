/**
 * Created by Alexandra on 10.06.17.
 */

import React from 'react';
import { browserHistory } from 'react-router';

import store from '../store';
import * as actionCreators from '../actions/login-logout-actions';

export function login(registered_users, name, password) {
	let isLogin = false;
	registered_users.forEach(registered_user => {
		if (
			registered_user.hasOwnProperty('name') &&
			registered_user.name === name &&
			registered_user.hasOwnProperty('password') &&
			registered_user.password === password
		) {
			// window.location.href = '/orders';
			browserHistory.push('/orders');
			localStorage.setItem('currentUser', name);
			isLogin = true;
		}
		return isLogin;
	});

	return store.dispatch(actionCreators.actionCreatorLogin(isLogin));
}

export function logout() {
	let isLogin = false;
	localStorage.clear();
	return store.dispatch(actionCreators.actionCreatorLogout(isLogin));
}

export function getCurrentUser() {
	let currentUser = localStorage.getItem('currentUser');
	return store.dispatch(
		actionCreators.actionCreatorGetCurrentUser(currentUser)
	);
}
