import React from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
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
					<ValidatorForm
						onSubmit={props.handleSendContactUsForm}
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
								value={props.contact_us_form.name}
								validators={['required']}
								errorMessages={['This field is required']}
							/>
							<Divider />
							<TextValidator
								hintText="Email..."
								floatingLabelText="Email..."
								fullWidth={true}
								style={style}
								underlineShow={false}
								onChange={props.handleUpdateInputEmail}
								name="email"
								value={props.contact_us_form.email}
								validators={['required', 'isEmail']}
								errorMessages={['This field is required', 'Email is not valid']}
							/>
							<Divider />
							<TextValidator
								hintText="Your query......"
								floatingLabelText="Your query......"
								multiLine={true}
								rows={2}
								rowsMax={4}
								fullWidth={true}
								style={style}
								underlineShow={false}
								onChange={props.handleUpdateQuery}
								name="query"
								value={props.contact_us_form.query}
								validators={['required']}
								errorMessages={['This field is required']}
							/>
							<Divider />
						</Paper>
						<RaisedButton
							type="submit"
							label="Send"
							className="send-order-form"
						/>
					</ValidatorForm>
				</div>
			</div>;
};
