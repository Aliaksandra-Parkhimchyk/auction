/**
 * Created by a.parkhimchyk on 07.06.2017.
 */

/*import React from 'react';
import { connect } from 'react-redux';

import * as formApi from '../../api/form-api';
import * as signUpApi from '../../api/sign-up-api';

import SignUpForm from '../signup-form.jsx';
import Cart from './cart.jsx';

class SignUp extends React.Component {
	constructor(props) {
		super(props);

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

export default connect(mapStateToProps)(SignUp);*/

import React from 'react';

import { connect } from 'react-redux';

import * as formApi from '../../api/form-api';
import * as signUpApi from '../../api/sign-up-api';

import AccountFields from '../account-fields.jsx';
import AddressFields from '../address-fields.jsx';
import ConfirmRegistration from '../confirm-registration.jsx';
import Thanks from '../thanks.jsx';
import SignupForm from '../signup-form.jsx';
import Cart from './cart.jsx';

class SignUp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			stepIndex: 0
		};

		this.handleBack = this.handleBack.bind(this);
		this.handleNext = this.handleNext.bind(this);
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
		const {
			name,
			email,
			phone,
			city,
			street,
			house,
			apartment,
			access,
			floor,
			password
		} = this.props;
		const { stepIndex } = this.state;

		if (stepIndex < 3) {
			this.setState({ stepIndex: stepIndex + 1 });
		}

		signUpApi.sendSignUpForm(
			name,
			email,
			phone,
			city,
			street,
			house,
			apartment,
			access,
			floor,
			password
		);
	}

	getStepContent(stepIndex) {
		const {
			name,
			email,
			password,
			phone,
			city,
			street,
			house,
			apartment,
			access,
			floor,
			cart
		} = this.props;
		switch (stepIndex) {
			case 0:
				return (
					<AccountFields
						name={name}
						email={email}
						password={password}
						handleBack={this.handleBack}
						handleNext={this.handleNext}
						handleUpdateInputName={this.handleUpdateInputName}
						handleUpdateInputEmail={this.handleUpdateInputEmail}
						handleUpdateInputPassword={this.handleUpdateInputPassword}
					/>
				);

			case 1:
				return (
					<AddressFields
						phone={phone}
						city={city}
						street={street}
						house={house}
						apartment={apartment}
						access={access}
						floor={floor}
						handleBack={this.handleBack}
						handleNext={this.handleNext}
						handleUpdateInputPhone={this.handleUpdateInputPhone}
						handleUpdateInputCity={this.handleUpdateInputCity}
						handleUpdateInputStreet={this.handleUpdateInputStreet}
						handleUpdateInputHouse={this.handleUpdateInputHouse}
						handleUpdateInputApartment={this.handleUpdateInputApartment}
						handleUpdateInputAccess={this.handleUpdateInputAccess}
						handleUpdateInputFloor={this.handleUpdateInputFloor}
					/>
				);

			case 2:
				return (
					<ConfirmRegistration
						name={name}
						email={email}
						password={password}
						phone={phone}
						city={city}
						street={street}
						house={house}
						apartment={apartment}
						access={access}
						floor={floor}
						handleBack={this.handleBack}
						handleSignUp={this.handleSignUp}
					/>
				);
			case 3:
				return <Thanks template="registration" cart={cart} />;
		}
	}

	handleBack() {
		const { stepIndex } = this.state;

		if (stepIndex > 0) {
			this.setState({ stepIndex: stepIndex - 1 });
		}
	}

	handleNext() {
		const { stepIndex } = this.state;

		if (stepIndex < 3) {
			this.setState({ stepIndex: stepIndex + 1 });
		}
	}

	render() {
		const { stepIndex } = this.state;

		return (
			<div className="container">
				<div className="row">
					<SignupForm
						stepIndex={stepIndex}
						getStepContent={this.getStepContent(stepIndex)}
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
