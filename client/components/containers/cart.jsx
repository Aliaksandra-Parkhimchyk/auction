/**
 * Created by Alexandra on 20.06.17.
 */

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

import { connect } from 'react-redux';

import * as cartApi from '../../api/cart-api';

class Cart extends React.Component {
	constructor(props) {
		super(props);
		this.handleDeleteProductFromCart = this.handleDeleteProductFromCart.bind(
			this
		);
	}

	handleDeleteProductFromCart(product) {
		const { cart } = this.props;
		cartApi.deleteProductFromCart(product, cart);
		cartApi.getTotalPrice(cart);
		this.forceUpdate();
	}

	render() {
		const { cart, totalPrice } = this.props;

		return cart && cart.length > 0
			? <div className="col-md-3">
					<div className="cart">
						<h3>Your cart</h3>
						<p>All goods: {cart.length}</p>
						{cart.map(item => {
							const { id, title, num, price } = item;

							return (
								<div key={id}>
									<RaisedButton
										label="X"
										className="delete-item"
										onTouchTap={this.handleDeleteProductFromCart.bind(
											null,
											item
										)}
									/>
									<p>{title} * {num} = ${price * num}</p>
								</div>
							);
						})}
						<p className="total">Total: ${totalPrice}</p>
						{window.location.href.indexOf('/checkout') === -1
							? <Link className="checkout" to={'/checkout'}>Checkout</Link>
							: null}
					</div>
				</div>
			: null;
	}
}

const mapStateToProps = store => {
	return {
		cart: store.cartState.cart,
		totalPrice: store.cartState.totalPrice
	};
};

export default connect(mapStateToProps)(Cart);
