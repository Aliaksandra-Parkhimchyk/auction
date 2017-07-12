import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import Thanks from './thanks.jsx';

export default props => {
	return props.isThanksForRegistration
		? <Thanks template="registration" cart={props.cart} />
		: <div className="col-md-9">
				<div className="sign-up-form">
					<h1>Registration Form</h1>
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
					<AutoComplete
						hintText="Password..."
						dataSource={props.dataSource}
						floatingLabelText="Password..."
						fullWidth={true}
						onUpdateInput={props.handleUpdateInputPassword}
					/>
					<RaisedButton
						label="Send"
						className="sign-up-form"
						onTouchTap={props.handleSignUp}
					/>
				</div>
			</div>;
};
