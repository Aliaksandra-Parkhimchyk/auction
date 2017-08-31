import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
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
					<Paper zDepth={1}>
						<TextField
							hintText="Name..."
							floatingLabelText="Name..."
							fullWidth={true}
							style={style}
							underlineShow={false}
							onChange={props.handleUpdateInputName}
						/>
						<Divider />
						<TextField
							hintText="Email..."
							floatingLabelText="Email..."
							fullWidth={true}
							style={style}
							underlineShow={false}
							onChange={props.handleUpdateInputEmail}
						/>
						<Divider />
						<TextField
							hintText="Phone..."
							floatingLabelText="Phone..."
							fullWidth={true}
							style={style}
							underlineShow={false}
							onChange={props.handleUpdateInputPhone}
						/>
						<Divider />
						<TextField
							hintText="City..."
							floatingLabelText="City..."
							fullWidth={true}
							style={style}
							underlineShow={false}
							onChange={props.handleUpdateInputCity}
						/>
						<Divider />
						<TextField
							hintText="Street..."
							floatingLabelText="Street..."
							fullWidth={true}
							style={style}
							underlineShow={false}
							onChange={props.handleUpdateInputStreet}
						/>
						<Divider />
						<TextField
							hintText="House..."
							floatingLabelText="House..."
							fullWidth={true}
							style={style}
							underlineShow={false}
							onChange={props.handleUpdateInputHouse}
						/>
						<Divider />
						<TextField
							hintText="Apartment..."
							floatingLabelText="Apartment..."
							fullWidth={true}
							style={style}
							underlineShow={false}
							onChange={props.handleUpdateInputApartment}
						/>
						<Divider />
						<TextField
							hintText="Access..."
							floatingLabelText="Access..."
							fullWidth={true}
							style={style}
							underlineShow={false}
							onChange={props.handleUpdateInputAccess}
						/>
						<Divider />
						<TextField
							hintText="Floor..."
							floatingLabelText="Floor..."
							fullWidth={true}
							style={style}
							underlineShow={false}
							onChange={props.handleUpdateInputFloor}
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
						/>
						<Divider />
					</Paper>
					<SelectField
						floatingLabelText="Payment option:"
						value={props.paymentTheInternet}
						onChange={props.handleChangePaymentTheInternet}
					>
						<MenuItem value={1} primaryText="By card through the Internet" />
						<MenuItem value={2} primaryText="In cash to the courier" />
						<MenuItem value={3} primaryText="By card to the courier" />
					</SelectField>
					{props.paymentTheInternet === 1
						? <CardForm
								onSubmit={props.onSubmit}
								getName={true}
								getZip={true}
							/>
						: null}
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
