/**
 * Created by a.parkhimchyk on 02.06.2017.
 */

import React from 'react';
import { connect } from 'react-redux';

import * as cartApi from '../../api/cart-api';
import * as formApi from '../../api/form-api';

import OrderForm from '../order-form.jsx';
import Cart from './cart.jsx';

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
			additionalInformation,
			paymentTheInternet,
			isCheckCutPizza,
			cart
		} = this.props;

		cartApi.sendOrderForm(
			name,
			email,
			phone,
			city,
			street,
			house,
			apartment,
			access,
			floor,
			additionalInformation,
			paymentTheInternet,
			isCheckCutPizza,
			cart
		);
	}

	render() {
		const { paymentTheInternet, isThanksForPurchase } = this.props;
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
		name: store.formState.name,
		email: store.formState.email,
		phone: store.formState.phone,
		city: store.formState.city,
		street: store.formState.street,
		house: store.formState.house,
		apartment: store.formState.apartment,
		access: store.formState.access,
		floor: store.formState.floor,
		additionalInformation: store.formState.additionalInformation,
		paymentTheInternet: store.formState.paymentTheInternet,
		isCheckCutPizza: store.formState.isCheckCutPizza
	};
};

export default connect(mapStateToProps)(Checkout);
