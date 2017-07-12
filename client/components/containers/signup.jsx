/**
 * Created by a.parkhimchyk on 07.06.2017.
 */

import React from 'react';
import { connect } from 'react-redux';

import * as formApi from '../../api/form-api';
import * as signUpApi from '../../api/sign-up-api';

import SignUpForm from '../signup-form.jsx';
import Cart from './cart.jsx';

class SignUp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			dataSource: []
		};

		this.handleUpdateInputName = this.handleUpdateInputName.bind(this);
		this.handleUpdateInputEmail = this.handleUpdateInputEmail.bind(this);
		this.handleUpdateInputPhone = this.handleUpdateInputPhone.bind(this);
		this.handleUpdateInputCity = this.handleUpdateInputCity.bind(this);
		this.handleUpdateInputStreet = this.handleUpdateInputStreet.bind(this);
		this.handleUpdateInputHouse = this.handleUpdateInputHouse.bind(this);
		this.handleUpdateInputApartment = this.handleUpdateInputApartment.bind(
			this
		);
		this.handleUpdateInputAccess = this.handleUpdateInputAccess.bind(this);
		this.handleUpdateInputFloor = this.handleUpdateInputFloor.bind(this);
		this.handleUpdateInputPassword = this.handleUpdateInputPassword.bind(this);
		this.handleSignUp = this.handleSignUp.bind(this);
	}

	handleUpdateInputName(value) {
		formApi.updateInputName(value);
	}

	handleUpdateInputEmail(value) {
		formApi.updateInputEmail(value);
	}

	handleUpdateInputPhone(value) {
		formApi.updateInputPhone(value);
	}

	handleUpdateInputCity(value) {
		formApi.updateInputCity(value);
	}

	handleUpdateInputStreet(value) {
		formApi.updateInputStreet(value);
	}

	handleUpdateInputHouse(value) {
		formApi.updateInputHouse(value);
	}

	handleUpdateInputApartment(value) {
		formApi.updateInputApartment(value);
	}

	handleUpdateInputAccess(value) {
		formApi.updateInputAccess(value);
	}

	handleUpdateInputFloor(value) {
		formApi.updateInputFloor(value);
	}

	handleUpdateInputPassword(value) {
		formApi.updateInputPassword(value);
	}

	handleSignUp() {
		signUpApi.sendSignUpForm(
			this.props.name,
			this.props.email,
			this.props.phone,
			this.props.city,
			this.props.street,
			this.props.house,
			this.props.apartment,
			this.props.access,
			this.props.floor,
			this.props.password
		);
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<SignUpForm
						cart={this.props.cart}
						dataSource={this.state.dataSource}
						isThanksForRegistration={this.props.isThanksForRegistration}
						handleUpdateInputName={this.handleUpdateInputName}
						handleUpdateInputEmail={this.handleUpdateInputEmail}
						handleUpdateInputPhone={this.handleUpdateInputPhone}
						handleUpdateInputCity={this.handleUpdateInputCity}
						handleUpdateInputStreet={this.handleUpdateInputStreet}
						handleUpdateInputHouse={this.handleUpdateInputHouse}
						handleUpdateInputApartment={this.handleUpdateInputApartment}
						handleUpdateInputAccess={this.handleUpdateInputAccess}
						handleUpdateInputFloor={this.handleUpdateInputFloor}
						handleUpdateInputPassword={this.handleUpdateInputPassword}
						handleSignUp={this.handleSignUp}
					/>
					<Cart />
				</div>
			</div>
		);
	}
}

const mapStateToProps = store => {
	return {
		cart: store.cartState.cart,
		isThanksForRegistration: store.signUpState.isThanksForRegistration,
		name: store.formState.name,
		email: store.formState.email,
		phone: store.formState.phone,
		city: store.formState.city,
		street: store.formState.street,
		house: store.formState.house,
		apartment: store.formState.apartment,
		access: store.formState.access,
		floor: store.formState.floor,
		password: store.formState.password
	};
};

export default connect(mapStateToProps)(SignUp);
