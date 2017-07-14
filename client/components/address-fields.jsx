import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default props => {
	return (
		<div className="address-form">
			<h1>Address Details</h1>
			<AutoComplete
				hintText="Phone..."
				dataSource={props.dataSource}
				floatingLabelText={props.phone ? props.phone : ''}
				fullWidth={true}
				onUpdateInput={props.handleUpdateInputPhone}
			/>
			<AutoComplete
				hintText="City..."
				dataSource={props.dataSource}
				floatingLabelText={props.city ? props.city : ''}
				fullWidth={true}
				onUpdateInput={props.handleUpdateInputCity}
			/>
			<AutoComplete
				hintText="Street..."
				dataSource={props.dataSource}
				floatingLabelText={props.street ? props.street : ''}
				fullWidth={true}
				onUpdateInput={props.handleUpdateInputStreet}
			/>
			<AutoComplete
				hintText="House..."
				dataSource={props.dataSource}
				floatingLabelText={props.house ? props.house : ''}
				fullWidth={true}
				onUpdateInput={props.handleUpdateInputHouse}
			/>
			<AutoComplete
				hintText="Apartment..."
				dataSource={props.dataSource}
				floatingLabelText={props.apartment ? props.apartment : ''}
				fullWidth={true}
				onUpdateInput={props.handleUpdateInputApartment}
			/>
			<AutoComplete
				hintText="Access..."
				dataSource={props.dataSource}
				floatingLabelText={props.access ? props.access : ''}
				fullWidth={true}
				onUpdateInput={props.handleUpdateInputAccess}
			/>
			<AutoComplete
				hintText="Floor..."
				dataSource={props.dataSource}
				floatingLabelText={props.floor ? props.floor : ''}
				fullWidth={true}
				onUpdateInput={props.handleUpdateInputFloor}
			/>
			<FlatButton label="Back" disabled={false} onTouchTap={props.handleBack} />
			<RaisedButton label="Next" primary={true} onTouchTap={props.handleNext} />
		</div>
	);
};
