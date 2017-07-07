/**
 * Created by a.parkhimchyk on 01.06.2017.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

// for the latest version react-router (4.1.1)
// import { HashRouter, Route, Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import Home from './components/containers/home.jsx';
import About from './components/containers/about.jsx';
import ContactUs from './components/containers/contact-us.jsx';
import Delivery from './components/containers/delivery.jsx';
import Checkout from './components/containers/checkout.jsx';
import Orders from './components/containers/orders.jsx';
import Login from './components/containers/login.jsx';
import Logout from './components/containers/logout.jsx';
import SignUp from './components/containers/signup.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
										<li>
											<Link
												className="nav-item"
												activeClassName="active"
												to="/orders"
											>
												Orders
											</Link>
										</li>
										<li>
											<Link
												className="nav-item"
												activeClassName="active"
												to="login"
											>
												Login
											</Link>
										</li>
										<li>
											<Link
												className="nav-item"
												activeClassName="active"
												to="/logout"
											>
												Logout
											</Link>
										</li>
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

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider>
			<Router history={browserHistory}>
				<Route path="/" component={MainLayout}>
					<IndexRoute component={Home} />
					<Route path="about" component={About} />
					<Route path="delivery" component={Delivery} />
					<Route path="contact-us" component={ContactUs} />
					<Route path="checkout" component={Checkout} />
					<Route path="orders" component={Orders} />
					<Route path="login" component={Login} />
					<Route path="logout" component={Logout} />
					<Route path="sign-up" component={SignUp} />
				</Route>
			</Router>
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root')
);
