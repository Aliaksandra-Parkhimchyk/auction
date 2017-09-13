/**
 * Created by a.parkhimchyk on 07.06.2017.
 */

import React from 'react';

import { connect } from 'react-redux';

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

	handleUpdateInputName(event) {
		signUpApi.updateInputNameSignUpForm(event.target.value);
	}

	handleUpdateInputEmail(event) {
		signUpApi.updateInputEmailSignUpForm(event.target.value);
	}

	handleUpdateInputPassword(event) {
		signUpApi.updateInputPasswordSignUpForm(event.target.value);
	}

	handleUpdateInputPhone(event) {
		signUpApi.updateInputPhoneSignUpForm(event.target.value);
	}

	handleUpdateInputCity(event) {
		signUpApi.updateInputCitySignUpForm(event.target.value);
	}

	handleUpdateInputStreet(event) {
		signUpApi.updateInputStreetSignUpForm(event.target.value);
	}

	handleUpdateInputHouse(event) {
		signUpApi.updateInputHouseSignUpForm(event.target.value);
	}

	handleUpdateInputApartment(event) {
		signUpApi.updateInputApartmenSignUpForm(event.target.value);
	}

	handleUpdateInputAccess(event) {
		signUpApi.updateInputAccessSignUpForm(event.target.value);
	}

	handleUpdateInputFloor(event) {
		signUpApi.updateInputFloorSignUpForm(event.target.value);
	}

	handleSignUp() {
		const { sign_up_form } = this.props;
		const { stepIndex } = this.state;

		if (stepIndex < 3) {
			this.setState({ stepIndex: stepIndex + 1 });
		}
		signUpApi.sendSignUpForm(sign_up_form);
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
			floor
		} = this.props.sign_up_form;
		const { cart } = this.props;
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
		sign_up_form: store.signUpState.sign_up_form
	};
};

export default connect(mapStateToProps)(SignUp);
