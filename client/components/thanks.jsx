/**
 * Created by Alexandra on 27.06.17.
 */

/**
 * Created by Alexandra on 20.06.17.
 */

import React from 'react';
import { Link } from 'react-router';

export default props => {
	return props.isThanks
		? <div className="thanks">
				<h1>Thank you for your purchase!!!</h1>
				<Link className="try-again" to={'/'}>Try again</Link>
			</div>
		: null;
};
