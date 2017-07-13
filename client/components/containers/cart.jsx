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
		cartApi.deleteProductFromCart(product, this.props.cart);
		cartApi.getTotalPrice(this.props.cart);
		this.forceUpdate();
	}

	render() {
		return this.props.cart && this.props.cart.length > 0
			? <div className="col-md-3">
					<div className="cart">
						<h3>Your cart</h3>
						<p>All goods: {this.props.cart.length}</p>
						{this.props.cart.map(item => {
							return (
								<div key={item.id}>
									<RaisedButton
										label="X"
										className="delete-item"
										onTouchTap={this.handleDeleteProductFromCart.bind(
											null,
											item
										)}
									/>
									<p>{item.title} * {item.num} = ${item.price * item.num}</p>
								</div>
							);
						})}
						<p className="total">Total: ${this.props.totalPrice}</p>
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
