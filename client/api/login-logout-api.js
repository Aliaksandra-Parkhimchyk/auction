/**
 * Created by Alexandra on 10.06.17.
 */

import React from 'react';
import { browserHistory } from 'react-router';

import store from '../store';
import * as actionCreators from '../actions/login-logout-actions';

export function login(registered_users, name, password) {
	let currentUser = '';
	registered_users.forEach(registered_user => {
		if (
			registered_user.hasOwnProperty('name') &&
			registered_user.name === name &&
			registered_user.hasOwnProperty('password') &&
			registered_user.password === password
		) {
			// window.location.href = '/orders';
			localStorage.setItem('currentUser', name);
			browserHistory.push('/orders');
			currentUser = name;
		}
		return currentUser;
	});

	return store.dispatch(actionCreators.actionCreatorLogin(currentUser));
}

export function logout() {
	let currentUser = '';
	localStorage.clear();
	return store.dispatch(actionCreators.actionCreatorLogout(currentUser));
}

export function getCurrentUser() {
	let currentUser = localStorage.getItem('currentUser');
	return store.dispatch(
		actionCreators.actionCreatorGetCurrentUser(currentUser)
	);
}
