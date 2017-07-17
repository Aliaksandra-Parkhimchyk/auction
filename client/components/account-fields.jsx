import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
	marginLeft: 20
};

export default props => {
	return (
		<div className="account-form">
			<h1>Account Details</h1>
			<Paper zDepth={1}>
				<TextField
					hintText="Name..."
					floatingLabelText={props.name ? props.name : ''}
					fullWidth={true}
					style={style}
					underlineShow={false}
					onChange={props.handleUpdateInputName}
				/>
				<Divider />
				<TextField
					hintText="Email..."
					floatingLabelText={props.email ? props.email : ''}
					fullWidth={true}
					style={style}
					underlineShow={false}
					onChange={props.handleUpdateInputEmail}
				/>
				<Divider />
				<TextField
					hintText="Password..."
					floatingLabelText={props.password ? props.password : ''}
					fullWidth={true}
					style={style}
					underlineShow={false}
					type="password"
					onChange={props.handleUpdateInputPassword}
				/>
				<Divider />
			</Paper>
			<FlatButton label="Back" disabled={true} onTouchTap={props.handleBack} />

			<RaisedButton label="Next" primary={true} onTouchTap={props.handleNext} />
		</div>
	);
};
