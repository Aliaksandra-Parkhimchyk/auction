import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default props => {
	return (
		<div className="account-form">
			<h1>Account Details</h1>
			<AutoComplete
				hintText="Name..."
				dataSource={props.dataSource}
				floatingLabelText={props.name ? props.name : ''}
				fullWidth={true}
				onUpdateInput={props.handleUpdateInputName}
			/>
			<AutoComplete
				hintText="Email..."
				dataSource={props.dataSource}
				floatingLabelText={props.email ? props.email : ''}
				fullWidth={true}
				onUpdateInput={props.handleUpdateInputEmail}
			/>
			<AutoComplete
				hintText="Password..."
				dataSource={props.dataSource}
				floatingLabelText={props.password ? props.password : ''}
				fullWidth={true}
				onUpdateInput={props.handleUpdateInputPassword}
			/>
			<FlatButton label="Back" disabled={true} onTouchTap={props.handleBack} />

			<RaisedButton label="Next" primary={true} onTouchTap={props.handleNext} />
		</div>
	);
};
