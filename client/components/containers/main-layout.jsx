/**
 * Created by Alexandra on 11.07.17.
 */

import React from 'react';
import { browserHistory } from 'react-router';

import { connect } from 'react-redux';

import * as loginLogoutApi from '../../api/login-logout-api';

// for the latest version react-router (4.1.1)
// import { HashRouter, Route, Link} from 'react-router-dom';

import Header from '../header.jsx';
import Footer from '../footer.jsx';
import Paper from 'material-ui/Paper';
import injectTapEventPlugin from 'react-tap-event-plugin';

const styles = {
	paper: {
		height: '1500px',
		width: '100%',
		display: 'inline-block'
	}
};

class MainLayout extends React.Component {
	constructor(props) {
		super(props);

		this.handleLogout = this.handleLogout.bind(this);
	}

	handleTouchTap() {
		browserHistory.push('/');
	}

	handleLogout() {
		loginLogoutApi.logout();
	}

	componentDidMount() {
		loginLogoutApi.getCurrentUser();
	}

	componentWillMount() {
		injectTapEventPlugin();
	}

	render() {
		const { children, currentUser } = this.props;
		return (
			<div className="app">

				<Header handleTouchTap={this.handleTouchTap} />

				<Paper className="main-section" style={styles.paper} zDepth={5}>
					{children}
				</Paper>

				<Footer currentUser={currentUser} handleLogout={this.handleLogout} />

			</div>
		);
	}
}

const mapStateToProps = store => {
	return {
		currentUser: store.loginLogoutState.currentUser
	};
};

export default connect(mapStateToProps)(MainLayout);
