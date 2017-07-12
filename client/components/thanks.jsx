/**
 * Created by Alexandra on 27.06.17.
 */

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default props => {
	return (
		<div className="col-md-9">
			<h1>Thank you for your {props.template}!!!</h1>
			{window.location.href.indexOf('/checkout') !== -1
				? <RaisedButton className="try-again" href="/" label="Try again" />
				: null}
			{props.cart && props.cart.length === 0
				? <RaisedButton
						className="start-shopping"
						href="/"
						label="Start shopping"
					/>
				: null}
		</div>
	);
};
