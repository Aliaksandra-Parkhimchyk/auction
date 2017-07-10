import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Thanks from './thanks.jsx';

export default props => {
	return props.isThanksForQuery
		? <Thanks template="query" />
		: <div className="col-md-9">
				<div className="order-form">
					<h1>Contact Us Form</h1>
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
					<TextField
						hintText="Your query..."
						multiLine={true}
						rows={2}
						rowsMax={4}
						fullWidth={true}
						onChange={props.handleUpdateQuery}
					/>
					<RaisedButton
						label="Send"
						className="send-order-form"
						onTouchTap={props.handleSendContactUsForm}
					/>
				</div>
			</div>;
};
