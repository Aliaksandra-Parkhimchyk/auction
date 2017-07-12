import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

export default props => {
	return (
		<div className="col-md-9">
			<div className="login-form">
				<h1>Login Form</h1>
				<AutoComplete
					hintText="Name..."
					dataSource={props.dataSource}
					floatingLabelText="Name..."
					fullWidth={true}
					onUpdateInput={props.handleUpdateInputName}
				/>
				<AutoComplete
					hintText="Password..."
					dataSource={props.dataSource}
					floatingLabelText="Password..."
					fullWidth={true}
					onUpdateInput={props.handleUpdateInputPassword}
				/>
				<RaisedButton
					label="Login"
					className="login"
					onTouchTap={props.handleLogin}
				/>
				<Link className="sign-up" to={'/sign-up'}>Sign Up</Link>
			</div>
		</div>
	);
};
