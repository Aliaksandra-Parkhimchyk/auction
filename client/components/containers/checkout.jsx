/**
 * Created by a.parkhimchyk on 02.06.2017.
 */

import React from 'react';
import { connect } from 'react-redux';

import * as cartApi from '../../api/cart-api';
import * as formApi from '../../api/form-api';

import OrderForm from '../order-form.jsx';
import Cart from './cart.jsx';

import Stripe from 'stripe.js';

class Checkout extends React.Component {
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
		this.handleUpdateAdditionalInformation = this.handleUpdateAdditionalInformation.bind(
			this
		);
		this.handleChangePaymentTheInternet = this.handleChangePaymentTheInternet.bind(
			this
		);
		this.handleCheckCutPizza = this.handleCheckCutPizza.bind(this);
		this.handleSendOrderForm = this.handleSendOrderForm.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(card) {
		console;
		const { number, exp_month, exp_year, cvc, name, zip } = card;
		Stripe.card.createToken(
			{
				number,
				exp_month,
				exp_year,
				cvc,
				name,
				address_zip: zip
			},
			(status, response) => {
				if (response.error) {
					alert('Adding card failed with error: ' + response.error.message);
				} else {
					const cardToken = response.id;
					// send cardToken to server to be saved under the current user
					// show success message and navigate away from form
				}
			}
		);
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

	handleUpdateAdditionalInformation(event) {
		formApi.updateInputAdditionalInformation(event.target.value);
	}

	handleChangePaymentTheInternet(event, index, value) {
		formApi.changePaymentTheInternet(value);
	}

	handleCheckCutPizza(event) {
		formApi.checkCutPizza(event.target.checked);
	}

	handleSendOrderForm() {
		const { form, cart } = this.props;

		cartApi.sendOrderForm(form, cart);
	}

	render() {
		const { paymentTheInternet, isThanksForPurchase } = this.props.form;
		return (
			<div className="container">
				<div className="row">
					<OrderForm
						paymentTheInternet={paymentTheInternet}
						isThanksForPurchase={isThanksForPurchase}
						handleUpdateInputName={this.handleUpdateInputName}
						handleUpdateInputEmail={this.handleUpdateInputEmail}
						handleUpdateInputPhone={this.handleUpdateInputPhone}
						handleUpdateInputCity={this.handleUpdateInputCity}
						handleUpdateInputStreet={this.handleUpdateInputStreet}
						handleUpdateInputHouse={this.handleUpdateInputHouse}
						handleUpdateInputApartment={this.handleUpdateInputApartment}
						handleUpdateInputAccess={this.handleUpdateInputAccess}
						handleUpdateInputFloor={this.handleUpdateInputFloor}
						handleUpdateAdditionalInformation={
							this.handleUpdateAdditionalInformation
						}
						handleChangePaymentTheInternet={this.handleChangePaymentTheInternet}
						handleCheckCutPizza={this.handleCheckCutPizza}
						handleSendOrderForm={this.handleSendOrderForm}
						onSubmit={this.onSubmit}
					/>
					<Cart />
				</div>
			</div>
		);
	}
}

const mapStateToProps = store => {
	return {
		products: store.productState.products,
		cart: store.cartState.cart,
		isThanksForPurchase: store.cartState.isThanksForPurchase,
		form: store.formState.form
	};
};

export default connect(mapStateToProps)(Checkout);
