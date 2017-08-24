import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default props => {
	return props.cart && props.cart.length === 0
		? <div className="col-md-9">
				<h1>Hello, {props.currentUser}!</h1>
				<p>Your orders will be displayed here :)</p>
				<RaisedButton
					className="start-shopping"
					href="/"
					label="Start shopping"
				/>
			</div>
		: <div className="col-md-9">
				<h1>
					Your orders:
				</h1>
			</div>;
};
