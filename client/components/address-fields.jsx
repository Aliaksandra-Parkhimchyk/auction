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
		<div className="address-form">
			<h1>Address Details</h1>
			<ValidatorForm
				onSubmit={props.handleNext}
				onError={errors => console.log(errors)}
			>
				<Paper zDepth={1}>
					<TextField
						hintText="Phone..."
						floatingLabelText={props.phone ? props.phone : ''}
						fullWidth={true}
						style={style}
						underlineShow={false}
						onChange={props.handleUpdateInputPhone}
					/>
					<Divider />
					<TextField
						hintText="City..."
						floatingLabelText={props.city ? props.city : ''}
						fullWidth={true}
						style={style}
						underlineShow={false}
						onChange={props.handleUpdateInputCity}
					/>
					<Divider />
					<TextValidator
						hintText="Street..."
						floatingLabelText={props.street ? props.street : ''}
						fullWidth={true}
						style={style}
						underlineShow={false}
						onChange={props.handleUpdateInputStreet}
                        name="street"
                        value={props.street}
                        validators={['required']}
                        errorMessages={['This field is required']}
					/>
					<Divider />
					<TextValidator
						hintText="House..."
						floatingLabelText={props.house ? props.house : ''}
						fullWidth={true}
						style={style}
						underlineShow={false}
						onChange={props.handleUpdateInputHouse}
						name="house"
						value={props.house}
						validators={[
							'required',
							'isNumber',
							'isPositive',
							'minNumber:0',
							'maxNumber:999'
						]}
						errorMessages={[
							'This field is required',
							'Value must be number',
							'Value must be positive',
							'Min number is 0',
							'Max number is 999'
						]}
					/>
					<Divider />
					<TextValidator
						hintText="Apartment..."
						floatingLabelText={props.apartment ? props.apartment : ''}
						fullWidth={true}
						style={style}
						underlineShow={false}
						onChange={props.handleUpdateInputApartment}
						name="apartment"
						value={props.apartment}
						validators={[
							'required',
							'isNumber',
							'isPositive',
							'minNumber:0',
							'maxNumber:999'
						]}
						errorMessages={[
							'This field is required',
							'Value must be number',
							'Value must be positive',
							'Min number is 0',
							'Max number is 999'
						]}
					/>
					<Divider />
					<TextValidator
						hintText="Access..."
						floatingLabelText={props.access ? props.access : ''}
						fullWidth={true}
						style={style}
						underlineShow={false}
						onChange={props.handleUpdateInputAccess}
						name="access"
						value={props.access}
						validators={[
							'isNumber',
							'isPositive',
							'minNumber:1',
							'maxNumber:10'
						]}
						errorMessages={[
							'Value must be number',
							'Value must be positive',
							'Min number is 1',
							'Max number is 10'
						]}
					/>
					<Divider />
					<TextValidator
						hintText="Floor..."
						floatingLabelText={props.floor ? props.floor : ''}
						fullWidth={true}
						style={style}
						underlineShow={false}
						onChange={props.handleUpdateInputFloor}
						name="floor"
						value={props.floor}
						validators={[
							'isNumber',
							'isPositive',
							'minNumber:1',
							'maxNumber:99'
						]}
						errorMessages={[
							'Value must be number',
							'Value must be positive',
							'Min number is 1',
							'Max number is 99'
						]}
					/>
					<Divider />
				</Paper>
				<FlatButton
					label="Back"
					disabled={false}
					onTouchTap={props.handleBack}
				/>
				<RaisedButton type="submit" label="Next" primary={true} />
			</ValidatorForm>
		</div>
	);
};
