import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import {
	ValidatorForm,
	TextValidator,
	SelectValidator
} from 'react-material-ui-form-validator';
import Thanks from './thanks.jsx';

import { CardForm } from 'react-payment';

const style = {
	marginLeft: 20
};

export default props => {
	return props.isThanksForPurchase
		? <Thanks template="purchase" />
		: <div className="col-md-9">
				<div className="order-form">
					<h1>Order Form</h1>
					<ValidatorForm
						onSubmit={props.handleSendOrderForm}
						onError={errors => console.log(errors)}
					>
						<Paper zDepth={1}>
							<TextValidator
								hintText="Name..."
								floatingLabelText="Name..."
								fullWidth={true}
								style={style}
								underlineShow={false}
								onChange={props.handleUpdateInputName}
								name="name"
								value={props.form.name}
								validators={['required']}
								errorMessages={['This field is required']}
							/>
							<Divider />
							<TextValidator
								hintText="Email..."
								floatingLabelText="Email..."
								fullWidth={true}
								style={style}
								underlineShow={false}
								onChange={props.handleUpdateInputEmail}
								name="email"
								value={props.form.email}
								validators={['required', 'isEmail']}
								errorMessages={['This field is required', 'Email is not valid']}
							/>
							<Divider />
							<TextValidator
								hintText="Phone..."
								floatingLabelText="Phone..."
								fullWidth={true}
								style={style}
								underlineShow={false}
								onChange={props.handleUpdateInputPhone}
								name="phone"
							/>
							<Divider />
							<TextValidator
								hintText="City..."
								floatingLabelText="City..."
								fullWidth={true}
								style={style}
								underlineShow={false}
								onChange={props.handleUpdateInputCity}
								name="city"
							/>
							<Divider />
							<TextValidator
								hintText="Street..."
								floatingLabelText="Street..."
								fullWidth={true}
								style={style}
								underlineShow={false}
								onChange={props.handleUpdateInputStreet}
								name="street"
							/>
							<Divider />
							<TextValidator
								hintText="House..."
								floatingLabelText="House..."
								fullWidth={true}
								style={style}
								underlineShow={false}
								onChange={props.handleUpdateInputHouse}
								name="house"
								value={props.form.house}
								validators={[
									'required',
									'isNumber',
									'isPositive',
									'minNumber:0',
									'maxNumber:999'
								]}
								errorMessages={[
									'This field is required',
									'Value must be number',
									'Value must be positive',
									'Min number is 0',
									'Max number is 999'
								]}
							/>
							<Divider />
							<TextValidator
								hintText="Apartment..."
								floatingLabelText="Apartment..."
								fullWidth={true}
								style={style}
								underlineShow={false}
								onChange={props.handleUpdateInputApartment}
								name="apartment"
								value={props.form.apartment}
								validators={[
									'required',
									'isNumber',
									'isPositive',
									'minNumber:0',
									'maxNumber:999'
								]}
								errorMessages={[
									'This field is required',
									'Value must be number',
									'Value must be positive',
									'Min number is 0',
									'Max number is 999'
								]}
							/>
							<Divider />
							<TextValidator
								hintText="Access..."
								floatingLabelText="Access..."
								fullWidth={true}
								style={style}
								underlineShow={false}
								onChange={props.handleUpdateInputAccess}
								name="access"
								value={props.form.access}
								validators={[
									'isNumber',
									'isPositive',
									'minNumber:1',
									'maxNumber:10'
								]}
								errorMessages={[
									'Value must be number',
									'Value must be positive',
									'Min number is 1',
									'Max number is 10'
								]}
							/>
							<Divider />
							<TextValidator
								hintText="Floor..."
								floatingLabelText="Floor..."
								fullWidth={true}
								style={style}
								underlineShow={false}
								onChange={props.handleUpdateInputFloor}
								name="floor"
								value={props.form.floor}
								validators={[
									'isNumber',
									'isPositive',
									'minNumber:1',
									'maxNumber:99'
								]}
								errorMessages={[
									'Value must be number',
									'Value must be positive',
									'Min number is 1',
									'Max number is 99'
								]}
							/>
							<Divider />
							<TextField
								hintText="Additional information..."
								multiLine={true}
								rows={2}
								rowsMax={4}
								fullWidth={true}
								style={style}
								underlineShow={false}
								onChange={props.handleUpdateAdditionalInformation}
								name="additional_information"
							/>
							<Divider />
						</Paper>
						<SelectValidator
							floatingLabelText="Payment option:"
							onChange={props.handleChangePaymentTheInternet}
							name="payment_option"
							value={props.form.paymentTheInternet}
							validators={['required']}
							errorMessages={['This field is required']}
						>
							<MenuItem value={1} primaryText="By card through the Internet" />
							<MenuItem value={2} primaryText="In cash to the courier" />
							<MenuItem value={3} primaryText="By card to the courier" />
						</SelectValidator>
						{props.form.paymentTheInternet === 1
							? <CardForm onSubmit={props.handleAddCart} getName={true} />
							: null}
						<Checkbox
							label="Cut pizza"
							name="cut-pizza"
							onCheck={props.handleCheckCutPizza}
						/>
						<RaisedButton
							type="submit"
							label="Send"
							className="send-order-form"
						/>
					</ValidatorForm>
				</div>
			</div>;
};
