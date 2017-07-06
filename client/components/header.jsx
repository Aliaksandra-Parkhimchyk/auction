/**
 * Created by a.parkhimchyk on 02.06.2017.
 */

import React from 'react';
import Link from 'react-router';
import AppBar from 'material-ui/AppBar';

const styles = {
	appBar: {
		backgroundColor: '#880E4F'
	},
	appBarTitle: {
		color: '#E0E0E0',
		cursor: 'pointer'
	}
};

export default props => {
	return (
		<AppBar
			style={styles.appBar}
			title={<span className="logo" style={styles.appBarTitle}>Site Name</span>}
		>
			<ul className="header-nav">
				<li>
					<Link className="nav-item" activeClassName="active" to="/">
						Home
					</Link>
				</li>
				<li>
					<Link className="nav-item" activeClassName="active" to="/about">
						About
					</Link>
				</li>
				<li>
					<Link className="nav-item" activeClassName="active" to="/delivery">
						Delivery
					</Link>
				</li>
				<li>
					<Link className="nav-item" activeClassName="active" to="/contact-us">
						Contact us
					</Link>
				</li>
			</ul>
		</AppBar>
	);
};
