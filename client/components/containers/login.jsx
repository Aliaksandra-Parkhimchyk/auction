/**
 * Created by a.parkhimchyk on 07.06.2017.
 */

import React from 'react';

import { connect } from 'react-redux';

import * as formApi from '../../api/form-api';
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
		formApi.updateInputName(value);
	}

	handleUpdateInputPassword(value) {
		formApi.updateInputPassword(value);
	}

	handleLogin() {
		loginLogoutApi.login(
			this.props.registered_users,
			this.props.name,
			this.props.password
		);
	}

	componentDidMount() {
		signUpApi.getRegisteredUsers();
	}

	render() {
		return !this.props.isLogin
			? <div className="container">
					<div className="row">
						<LoginForm
							dataSource={this.state.dataSource}
							handleUpdateInputName={this.handleUpdateInputName}
							handleUpdateInputPassword={this.handleUpdateInputPassword}
							handleLogin={this.handleLogin}
							isLogin={this.props.isLogin}
						/>
						<Cart />
					</div>
				</div>
			: null;
	}
}

const mapStateToProps = store => {
	return {
		name: store.formState.name,
		password: store.formState.password,
		registered_users: store.signUpState.registered_users,
		isLogin: store.loginLogoutState.isLogin
	};
};

export default connect(mapStateToProps)(Login);
