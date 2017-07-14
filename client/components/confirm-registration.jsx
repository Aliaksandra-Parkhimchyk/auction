import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default props => {
	return (
		<div className="confirm-registration">
			<h1>Confirm Registration</h1>
			<ul>
				<li>Name: {props.name}</li>
				<li>Email: {props.email}</li>
				<li>Password: {props.password}</li>
				<li>Phone: {props.phone}</li>
				<li>City: {props.city}</li>
				<li>Street: {props.street}</li>
				<li>House: {props.house}</li>
				<li>Apartment: {props.apartment}</li>
				<li>Access: {props.access}</li>
				<li>Floor: {props.floor}</li>
			</ul>
			<FlatButton label="Back" disabled={false} onTouchTap={props.handleBack} />
			<RaisedButton
				label="Finish"
				primary={true}
				onTouchTap={props.handleSignUp}
			/>
		</div>
	);
};
