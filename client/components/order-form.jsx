import React from 'react';
import { Link } from 'react-router';
import AutoComplete from 'material-ui/AutoComplete';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import Thanks from './thanks.jsx';

export default props => {
	return (
		<div className="col-md-9">
			<div className="order-form">
				<h1>Order Form</h1>
				<Thanks isThanks={props.isThanks} />
				<AutoComplete
					hintText="Name..."
					dataSource={props.dataSource}
					floatingLabelText="Name..."
					fullWidth={true}
				/>
				<AutoComplete
					hintText="Email..."
					dataSource={props.dataSource}
					floatingLabelText="Email..."
					fullWidth={true}
				/>
				<AutoComplete
					hintText="Phone..."
					dataSource={props.dataSource}
					floatingLabelText="Phone..."
					fullWidth={true}
				/>
				<AutoComplete
					hintText="City..."
					dataSource={props.dataSource}
					floatingLabelText="City..."
					fullWidth={true}
				/>
				<AutoComplete
					hintText="Street..."
					dataSource={props.dataSource}
					floatingLabelText="Street..."
					fullWidth={true}
				/>
				<AutoComplete
					hintText="House..."
					dataSource={props.dataSource}
					floatingLabelText="House..."
					fullWidth={true}
				/>
				<AutoComplete
					hintText="Apartment..."
					dataSource={props.dataSource}
					floatingLabelText="Apartment..."
					fullWidth={true}
				/>
				<AutoComplete
					hintText="Access..."
					dataSource={props.dataSource}
					floatingLabelText="Access..."
					fullWidth={true}
				/>
				<AutoComplete
					hintText="Floor..."
					dataSource={props.dataSource}
					floatingLabelText="Floor..."
					fullWidth={true}
				/>
				<textarea
					rows="3"
					className="form-control"
					placeholder="Additional information..."
				/>
				<SelectField
					floatingLabelText="Payment option:"
					value={props.value}
					onChange={props.handleChange}
				>
					<MenuItem value={1} primaryText="Through the Internet" />
					<MenuItem value={2} primaryText="Cash to the courier" />
					<MenuItem value={3} primaryText="Card to the courier" />
				</SelectField>
				<Checkbox label="Cut pizza" name="cut-pizza" />
				<RaisedButton label="Send" className="send-order-form" />
			</div>
		</div>
	);
};
