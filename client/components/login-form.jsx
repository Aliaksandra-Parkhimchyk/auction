/*
import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

const style = {
	marginLeft: 20
};

export default props => {
	return (
		<div className="col-md-9">
			<div className="login-form">
				<h1>Login Form</h1>
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
						hintText="Password..."
						floatingLabelText="Password..."
						fullWidth={true}
						style={style}
						underlineShow={false}
						type="password"
						onChange={props.handleUpdateInputPassword}
					/>
					<Divider />
				</Paper>
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
*/

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
					type="password"
					onTouchTap={props.handleLogin}
				/>
				<Link className="sign-up" to={'/sign-up'}>Sign Up</Link>
			</div>
		</div>
	);
};
