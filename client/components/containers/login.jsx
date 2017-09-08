/**
 * Created by a.parkhimchyk on 07.06.2017.
 */

import React from 'react';

import { connect } from 'react-redux';

import * as loginLogoutApi from '../../api/login-logout-api';
import * as signUpApi from '../../api/sign-up-api';

import LoginForm from '../login-form.jsx';
import Cart from './cart.jsx';

class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			dataSource: []
		};

		this.handleUpdateInputName = this.handleUpdateInputName.bind(this);
		this.handleUpdateInputPassword = this.handleUpdateInputPassword.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleUpdateInputName(value) {
		loginLogoutApi.updateInputNameLoginForm(value);
	}

	handleUpdateInputPassword(value) {
		loginLogoutApi.updateInputPasswordLoginForm(value);
	}

	handleLogin() {
		const { login_form, registered_users } = this.props;
		loginLogoutApi.login(registered_users, login_form);
	}

	componentDidMount() {
		signUpApi.getRegisteredUsers();
		loginLogoutApi.getCurrentUser();
	}

	render() {
		return !this.props.currentUser
			? <div className="container">
					<div className="row">
						<LoginForm
							dataSource={this.state.dataSource}
							handleUpdateInputName={this.handleUpdateInputName}
							handleUpdateInputPassword={this.handleUpdateInputPassword}
							handleLogin={this.handleLogin}
						/>
						<Cart />
					</div>
				</div>
			: null;
	}
}

const mapStateToProps = store => {
	return {
		login_form: store.loginLogoutState.login_form,
		currentUser: store.loginLogoutState.currentUser,
		registered_users: store.signUpState.registered_users
	};
};

export default connect(mapStateToProps)(Login);
