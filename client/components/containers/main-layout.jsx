/**
 * Created by Alexandra on 11.07.17.
 */

import React from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';

import * as loginLogoutApi from '../../api/login-logout-api';

// for the latest version react-router (4.1.1)
// import { HashRouter, Route, Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import injectTapEventPlugin from 'react-tap-event-plugin';

const styles = {
	appBar: {
		backgroundColor: '#880E4F'
	},
	appBarTitle: {
		cursor: 'pointer'
	},
	paper: {
		height: '1100px',
		width: '100%',
		display: 'inline-block'
	}
};

class MainLayout extends React.Component {
	constructor(props) {
		super(props);

		this.handleLogout = this.handleLogout.bind(this);
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
		return (
			<div className="app">

				<AppBar
					className="header"
					style={styles.appBar}
					title={
						<span className="logo" style={styles.appBarTitle}>Site Name</span>
					}
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
							<Link
								className="nav-item"
								activeClassName="active"
								to="/delivery"
							>
								Delivery
							</Link>
						</li>
						<li>
							<Link
								className="nav-item"
								activeClassName="active"
								to="/contact-us"
							>
								Contact Us
							</Link>
						</li>
					</ul>

				</AppBar>

				<Paper className="main-section" style={styles.paper} zDepth={5}>
					{this.props.children}
				</Paper>

				<footer className="footer">
					<div className="container">
						<div className="row">
							<div className="col-md-8">
								<nav className="footer_nav">
									<ul className="footer-nav">
										<li>
											<Link
												className="nav-item"
												activeClassName="active"
												to="/"
											>
												Home
											</Link>
										</li>
										<li>
											<Link
												className="nav-item"
												activeClassName="active"
												to="/about"
											>
												About
											</Link>
										</li>
										<li>
											<Link
												className="nav-item"
												activeClassName="active"
												to="/delivery"
											>
												Delivery
											</Link>
										</li>
										<li>
											<Link
												className="nav-item"
												activeClassName="active"
												to="/contact-us"
											>
												Contact Us
											</Link>
										</li>
										{this.props.currentUser
											? <li>
													<Link
														className="nav-item"
														activeClassName="active"
														to="/orders"
													>
														Orders
													</Link>
												</li>
											: null}
										{!this.props.currentUser
											? <li>
													<Link
														className="nav-item"
														activeClassName="active"
														to="login"
													>
														Login
													</Link>
												</li>
											: null}
										{this.props.currentUser
											? <li>
													<Link
														className="nav-item"
														activeClassName="active"
														to="/"
														onClick={this.handleLogout}
													>
														Logout ({this.props.currentUser})
													</Link>
												</li>
											: null}
									</ul>
								</nav>
								<small className="copyright">
									<span>Designed by: </span>
									<a href="#" className="design">
										www.alltemplateneeds.com
										/{' '}
									</a>Images from:{' '}
									<a href="#" className="images">
										www.wallpaperswide.com /{' '}
									</a>Copyright(c) website
									name.
								</small>
							</div>
							<div className="col-md-2 col-md-offset-2">
								<figure className="footer_icons">
									<a href="https://www.facebook.com/">
										<div className="circle">
											<i className="icon-facebook" />
										</div>
									</a>
									<a href="https://twitter.com/?lang=ru">
										<div className="circle">
											<i className="icon-twitter" />
										</div>
									</a>
									<a href="https://www.linkedin.com/nhome/">
										<div className="circle">
											<i className="icon-linkedin" />
										</div>
									</a>
								</figure>
							</div>
						</div>
					</div>
				</footer>

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
