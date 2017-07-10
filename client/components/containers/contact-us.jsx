/**
 * Created by a.parkhimchyk on 02.06.2017.
 */

import React from 'react';
import { connect } from 'react-redux';

import * as cartApi from '../../api/cart-api';
import * as formApi from '../../api/form-api';

import ContactUsForm from '../contact-us-form.jsx';
import Cart from './cart.jsx';

class ContactUs extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			dataSource: []
		};

		this.handleUpdateInputName = this.handleUpdateInputName.bind(this);
		this.handleUpdateInputEmail = this.handleUpdateInputEmail.bind(this);
		this.handleUpdateQuery = this.handleUpdateQuery.bind(this);
		this.handleSendContactUsForm = this.handleSendContactUsForm.bind(this);
	}

	handleUpdateInputName(value) {
		formApi.updateInputName(value);
	}

	handleUpdateInputEmail(value) {
		formApi.updateInputEmail(value);
	}

	handleUpdateQuery(event) {
		formApi.updateInputAdditionalInformation(event.target.value);
	}

	handleSendContactUsForm() {
		cartApi.sendContactUsForm(
			this.props.name,
			this.props.email,
			this.props.additionalInformation
		);
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<ContactUsForm
						dataSource={this.state.dataSource}
						isThanksForQuery={this.props.isThanksForQuery}
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
		isThanksForQuery: store.cartState.isThanksForQuery,
		name: store.formState.name,
		email: store.formState.email,
		additionalInformation: store.formState.additionalInformation
	};
};

export default connect(mapStateToProps)(ContactUs);
