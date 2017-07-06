/**
 * Created by Alexandra on 27.06.17.
 */

/**
 * Created by Alexandra on 20.06.17.
 */

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default props => {
	return (
		<div className="thanks">
			<h1>Thank you for your purchase!!!</h1>
			<RaisedButton className="try-again" href="/" label="Try again" />
		</div>
	);
};
