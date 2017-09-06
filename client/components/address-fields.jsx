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
		<div className="address-form">
			<h1>Address Details</h1>
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
				<TextField
					hintText="Street..."
					floatingLabelText={props.street ? props.street : ''}
					fullWidth={true}
					style={style}
					underlineShow={false}
					onChange={props.handleUpdateInputStreet}
				/>
				<Divider />
				<TextField
					hintText="House..."
					floatingLabelText={props.house ? props.house : ''}
					fullWidth={true}
					style={style}
					underlineShow={false}
					onChange={props.handleUpdateInputHouse}
				/>
				<Divider />
				<TextField
					hintText="Apartment..."
					floatingLabelText={props.apartment ? props.apartment : ''}
					fullWidth={true}
					style={style}
					underlineShow={false}
					onChange={props.handleUpdateInputApartment}
				/>
				<Divider />
				<TextField
					hintText="Access..."
					floatingLabelText={props.access ? props.access : ''}
					fullWidth={true}
					style={style}
					underlineShow={false}
					onChange={props.handleUpdateInputAccess}
				/>
				<Divider />
				<TextField
					hintText="Floor..."
					floatingLabelText={props.floor ? props.floor : ''}
					fullWidth={true}
					style={style}
					underlineShow={false}
					onChange={props.handleUpdateInputFloor}
				/>
				<Divider />
			</Paper>
			<FlatButton label="Back" disabled={false} onTouchTap={props.handleBack} />
			<RaisedButton label="Next" primary={true} onTouchTap={props.handleNext} />
		</div>
	);
};
