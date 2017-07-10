import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import Thanks from './thanks.jsx';

export default props => {
	return props.isThanksForPurchase
		? <Thanks template="purchase" />
		: <div className="col-md-9">
				<div className="order-form">
					<h1>Order Form</h1>
					<AutoComplete
						hintText="Name..."
						dataSource={props.dataSource}
						floatingLabelText="Name..."
						fullWidth={true}
						onUpdateInput={props.handleUpdateInputName}
					/>
					<AutoComplete
						hintText="Email..."
						dataSource={props.dataSource}
						floatingLabelText="Email..."
						fullWidth={true}
						onUpdateInput={props.handleUpdateInputEmail}
					/>
					<AutoComplete
						hintText="Phone..."
						dataSource={props.dataSource}
						floatingLabelText="Phone..."
						fullWidth={true}
						onUpdateInput={props.handleUpdateInputPhone}
					/>
					<AutoComplete
						hintText="City..."
						dataSource={props.dataSource}
						floatingLabelText="City..."
						fullWidth={true}
						onUpdateInput={props.handleUpdateInputCity}
					/>
					<AutoComplete
						hintText="Street..."
						dataSource={props.dataSource}
						floatingLabelText="Street..."
						fullWidth={true}
						onUpdateInput={props.handleUpdateInputStreet}
					/>
					<AutoComplete
						hintText="House..."
						dataSource={props.dataSource}
						floatingLabelText="House..."
						fullWidth={true}
						onUpdateInput={props.handleUpdateInputHouse}
					/>
					<AutoComplete
						hintText="Apartment..."
						dataSource={props.dataSource}
						floatingLabelText="Apartment..."
						fullWidth={true}
						onUpdateInput={props.handleUpdateInputApartment}
					/>
					<AutoComplete
						hintText="Access..."
						dataSource={props.dataSource}
						floatingLabelText="Access..."
						fullWidth={true}
						onUpdateInput={props.handleUpdateInputAccess}
					/>
					<AutoComplete
						hintText="Floor..."
						dataSource={props.dataSource}
						floatingLabelText="Floor..."
						fullWidth={true}
						onUpdateInput={props.handleUpdateInputFloor}
					/>
					<TextField
						hintText="Additional information..."
						multiLine={true}
						rows={2}
						rowsMax={4}
						fullWidth={true}
						onChange={props.handleUpdateAdditionalInformation}
					/>
					<SelectField
						floatingLabelText="Payment option:"
						value={props.paymentTheInternet}
						onChange={props.handleChangePaymentTheInternet}
					>
						<MenuItem value={1} primaryText="Through the Internet" />
						<MenuItem value={2} primaryText="Cash to the courier" />
						<MenuItem value={3} primaryText="Card to the courier" />
					</SelectField>
					<Checkbox
						label="Cut pizza"
						name="cut-pizza"
						onCheck={props.handleCheckCutPizza}
					/>
					<RaisedButton
						label="Send"
						className="send-order-form"
						onTouchTap={props.handleSendOrderForm}
					/>
				</div>
			</div>;
};
