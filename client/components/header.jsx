import React from 'react';
import { Link } from 'react-router';

import AppBar from 'material-ui/AppBar';

const styles = {
	appBar: {
		backgroundColor: '#880E4F'
	},
	appBarTitle: {
		cursor: 'pointer'
	}
};

export default props => {
	return (
		<AppBar
			className="header"
			style={styles.appBar}
			title={<span className="logo" style={styles.appBarTitle}>Site Name</span>}
		>
			<ul className="header-nav">
				<li>
					<Link
						className="nav-item"
						to="/"
						activeClassName={window.location.pathname === '/' ? 'active' : ''}
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						className="nav-item"
						to="/about"
						activeClassName={
							window.location.pathname === '/about' ? 'active' : ''
						}
					>
						About
					</Link>
				</li>
				<li>
					<Link
						className="nav-item"
						to="/delivery"
						activeClassName={
							window.location.pathname === '/delivery' ? 'active' : ''
						}
					>
						Delivery
					</Link>
				</li>
				<li>
					<Link
						className="nav-item"
						to="/contact-us"
						activeClassName={
							window.location.pathname === '/contact-us' ? 'active' : ''
						}
					>
						Contact Us
					</Link>
				</li>
			</ul>

		</AppBar>
	);
};
