import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Thanks from './thanks.jsx';

const style = {
	marginLeft: 20
};

export default props => {
	return props.isThanksForQuery
		? <Thanks template="query" cart={props.cart} />
		: <div className="col-md-9">
				<div className="contact-us-form">
					<h1>Contact Us Form</h1>
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
							hintText="Your query..."
							multiLine={true}
							rows={2}
							rowsMax={4}
							fullWidth={true}
							style={style}
							underlineShow={false}
							onChange={props.handleUpdateQuery}
						/>
						<Divider />
					</Paper>
					<RaisedButton
						label="Send"
						className="send-order-form"
						onTouchTap={props.handleSendContactUsForm}
					/>
				</div>
			</div>;
};
