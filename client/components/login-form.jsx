import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Link } from 'react-router';

const style = {
	marginLeft: 20
};

export default props => {
	return (
		<div className="col-md-9">
			<div className="login-form">
				<h1>Login Form</h1>
				<ValidatorForm
					onSubmit={props.handleLogin}
					onError={errors => console.log(errors)}
				>
					<Paper zDepth={1}>
						<TextValidator
							hintText="Name..."
							floatingLabelText="Name..."
							fullWidth={true}
							style={style}
							underlineShow={false}
							onChange={props.handleUpdateInputName}
							name="name"
							value={props.login_form.name}
							validators={['required']}
							errorMessages={['This field is required']}
						/>
						<Divider />
						<TextValidator
							hintText="Password..."
							floatingLabelText="Password..."
							fullWidth={true}
							style={style}
							underlineShow={false}
							type="password"
							onChange={props.handleUpdateInputPassword}
							name="password"
							value={props.login_form.password}
							validators={['required']}
							errorMessages={['This field is required']}
						/>
						<Divider />
					</Paper>
					<RaisedButton type="submit" label="Login" className="login" />
					<Link className="sign-up" to={'/sign-up'}>Sign Up</Link>
				</ValidatorForm>
			</div>
		</div>
	);
};
