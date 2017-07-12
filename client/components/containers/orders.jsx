/**
 * Created by a.parkhimchyk on 07.06.2017.
 */

import React from 'react';

import { connect } from 'react-redux';

import OrdersList from '../orders-list.jsx';
import Cart from './cart.jsx';

class Orders extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return this.props.isLogin
			? <div className="container">
					<div className="row">
						<OrdersList
							cart={this.props.cart}
							currentUser={this.props.currentUser}
						/>
						<Cart />
					</div>
				</div>
			: null;
	}
}

const mapStateToProps = store => {
	return {
		cart: store.cartState.cart,
		currentUser: store.loginLogoutState.currentUser,
		isLogin: store.loginLogoutState.isLogin
	};
};

export default connect(mapStateToProps)(Orders);
