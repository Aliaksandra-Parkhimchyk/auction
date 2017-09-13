/**
 * Created by a.parkhimchyk on 07.06.2017.
 */

import React from 'react';

import { connect } from 'react-redux';
import * as cartApi from '../../api/cart-api';
import * as loginLogoutApi from '../../api/login-logout-api';

import OrdersList from '../orders-list.jsx';
import Cart from './cart.jsx';

class Orders extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { cart } = this.props;
		cartApi.getCart(cart);
		loginLogoutApi.getCurrentUser();
	}

	render() {
		const { cart, currentUser } = this.props;
		return currentUser
			? <div className="container">
					<div className="row">
						<OrdersList cart={cart} currentUser={currentUser} />
						<Cart />
					</div>
				</div>
			: null;
	}
}

const mapStateToProps = store => {
	return {
		cart: store.cartState.cart,
		currentUser: store.loginLogoutState.currentUser
	};
};

export default connect(mapStateToProps)(Orders);
