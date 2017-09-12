/**
 * Created by a.parkhimchyk on 01.06.2017.
 */

import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// for the latest version react-router (4.1.1)
// import { HashRouter, Route, Link} from 'react-router-dom';

import MainLayout from './components/containers/main-layout.jsx';
import Home from './components/containers/home.jsx';
import About from './components/containers/about.jsx';
import ContactUs from './components/containers/contact-us.jsx';
import Delivery from './components/containers/delivery.jsx';
import Checkout from './components/containers/checkout.jsx';
import Orders from './components/containers/orders.jsx';
import Login from './components/containers/login.jsx';
import SignUp from './components/containers/signup.jsx';

export default props => {
	return (
		<Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
			<Route path="/" component={MainLayout}>
				<IndexRoute component={Home} />
				<Route path="about" component={About} />
				<Route path="delivery" component={Delivery} />
				<Route path="contact-us" component={ContactUs} />
				<Route path="checkout" component={Checkout} />
				<Route path="orders" component={Orders} />
				<Route path="login" component={Login} />
				<Route path="sign-up" component={SignUp} />
			</Route>
		</Router>
	);
};
