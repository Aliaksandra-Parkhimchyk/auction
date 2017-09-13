/**
 * Created by a.parkhimchyk on 02.06.2017.
 */

import React from 'react';
import { connect } from 'react-redux';

import * as cartApi from '../../api/cart-api';
import * as formApi from '../../api/form-api';

import OrderForm from '../order-form.jsx';
import Cart from './cart.jsx';

// let loadedStripe = false;

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
		this.handleAddCart = this.handleAddCart.bind(this);
	}

	handleAddCart(card) {
		formApi.addCard(card);
	}

	handleUpdateInputName(event) {
		formApi.updateInputNameOrderForm(event.target.value);
	}

	handleUpdateInputEmail(event) {
		formApi.updateInputEmailOrderForm(event.target.value);
	}

	handleUpdateInputPhone(event) {
		formApi.updateInputPhoneOrderForm(event.target.value);
	}

	handleUpdateInputCity(event) {
		formApi.updateInputCityOrderForm(event.target.value);
	}

	handleUpdateInputStreet(event) {
		formApi.updateInputStreetOrderForm(event.target.value);
	}

	handleUpdateInputHouse(event) {
		formApi.updateInputHouseOrderForm(event.target.value);
	}

	handleUpdateInputApartment(event) {
		formApi.updateInputApartmentOrderForm(event.target.value);
	}

	handleUpdateInputAccess(event) {
		formApi.updateInputAccessOrderForm(event.target.value);
	}

	handleUpdateInputFloor(event) {
		formApi.updateInputFloorOrderForm(event.target.value);
	}

	handleUpdateAdditionalInformation(event) {
		formApi.updateInputAdditionalInformationOrderForm(event.target.value);
	}

	handleChangePaymentTheInternet(event, index, value) {
		formApi.changePaymentTheInternetOrderForm(value);
	}

	handleCheckCutPizza(event) {
		formApi.checkCutPizzaOrderForm(event.target.checked);
	}

	handleSendOrderForm() {
		const { form, cart } = this.props;
		cartApi.sendOrderForm(form, cart);
	}

	/*componentWillMount() {
        if (loadedStripe) {
            return;
        }

        const script = document.createElement("script");
        script.src = "https://js.stripe.com/v2/";
        script.type = "text/javascript";
        script.async = true;
        script.onload = () => {
            Stripe.setPublishableKey('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
        };
        document.body.appendChild(script);

        loadedStripe = true;
    }*/

	render() {
		const { paymentTheInternet } = this.props.form;
		const { isThanksForPurchase, form } = this.props;
		return (
			<div className="container">
				<div className="row">
					<OrderForm
						form={form}
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
						handleAddCart={this.handleAddCart}
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
