/**
 * Created by a.parkhimchyk on 02.06.2017.
 */

import React from 'react';
import { connect } from 'react-redux';

import * as contactUsFormApi from '../../api/contact-us-api';

import ContactUsForm from '../contact-us-form.jsx';
import Cart from './cart.jsx';

class ContactUs extends React.Component {
	constructor(props) {
		super(props);

		this.handleUpdateInputName = this.handleUpdateInputName.bind(this);
		this.handleUpdateInputEmail = this.handleUpdateInputEmail.bind(this);
		this.handleUpdateQuery = this.handleUpdateQuery.bind(this);
		this.handleSendContactUsForm = this.handleSendContactUsForm.bind(this);
	}

	handleUpdateInputName(event) {
		contactUsFormApi.updateInputNameContactUsForm(event.target.value);
	}

	handleUpdateInputEmail(event) {
		contactUsFormApi.updateInputEmailContactUsForm(event.target.value);
	}

	handleUpdateQuery(event) {
		contactUsFormApi.updateInputQueryContactUsForm(event.target.value);
	}

	handleSendContactUsForm() {
		const { contact_us_form } = this.props;
		contactUsFormApi.sendContactUsForm(contact_us_form);
	}

	render() {
		const { cart, contact_us_form, isThanksForQuery } = this.props;
		return (
			<div className="container">
				<div className="row">
					<ContactUsForm
						cart={cart}
						contact_us_form={contact_us_form}
						isThanksForQuery={isThanksForQuery}
						handleUpdateInputName={this.handleUpdateInputName}
						handleUpdateInputEmail={this.handleUpdateInputEmail}
						handleUpdateQuery={this.handleUpdateQuery}
						handleSendContactUsForm={this.handleSendContactUsForm}
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
		contact_us_form: store.contactUsState.contact_us_form,
		isThanksForQuery: store.contactUsState.isThanksForQuery
	};
};

export default connect(mapStateToProps)(ContactUs);
