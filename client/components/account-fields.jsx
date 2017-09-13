import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const style = {
	marginLeft: 20
};

export default props => {
	return (
		<div className="account-form">
			<h1>Account Details</h1>
			<ValidatorForm
				onSubmit={props.handleNext}
				onError={errors => console.log(errors)}
			>
				<Paper zDepth={1}>
					<TextValidator
						hintText="Name..."
						floatingLabelText={props.name ? props.name : ''}
						fullWidth={true}
						style={style}
						underlineShow={false}
						onChange={props.handleUpdateInputName}
						name="name"
						value={props.name}
						validators={['required']}
						errorMessages={['This field is required']}
					/>
					<Divider />
					<TextValidator
						hintText="Email..."
						floatingLabelText={props.email ? props.email : ''}
						fullWidth={true}
						style={style}
						underlineShow={false}
						onChange={props.handleUpdateInputEmail}
						name="email"
						value={props.email}
						validators={['required', 'isEmail']}
						errorMessages={['This field is required', 'Email is not valid']}
					/>
					<Divider />
					<TextValidator
						hintText="Password..."
						floatingLabelText={props.password ? props.password : ''}
						fullWidth={true}
						style={style}
						underlineShow={false}
						type="password"
						onChange={props.handleUpdateInputPassword}
						name="password"
						value={props.password}
						validators={['required']}
						errorMessages={['This field is required']}
					/>
					<Divider />
				</Paper>
				<FlatButton
					label="Back"
					disabled={true}
					onTouchTap={props.handleBack}
				/>

				<RaisedButton type="submit" label="Next" primary={true} />
			</ValidatorForm>
		</div>
	);
};
