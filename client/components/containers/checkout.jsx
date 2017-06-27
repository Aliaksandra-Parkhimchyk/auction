/**
 * Created by a.parkhimchyk on 02.06.2017.
 */

import React from 'react';
import { connect } from 'react-redux';

import * as productApi from '../../api/product-api';
import * as cartApi from '../../api/cart-api';

import OrderForm from '../order-form.jsx';
import Cart from '../cart.jsx';

class Checkout extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			dataSource: [],
			value: 1
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleDeleteProductFromCart = this.handleDeleteProductFromCart.bind(
			this
		);
	}

	handleChange(event, index, value) {
		this.setState({ value: value });
	}

	handleDeleteProductFromCart(product) {
		productApi.getProducts();
		cartApi.deleteProductFromCart(product, this.props.cart);
	}

	handleSendOrderForm() {
		cartApi.sendOrderForm();
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<OrderForm
						dataSource={this.state.dataSource}
						value={this.state.value}
						handleChange={this.handleChange}
						isThanks={this.props.isThanks}
					/>
					<Cart
						cart={this.props.cart}
						handleDeleteProductFromCart={this.handleDeleteProductFromCart}
						totalPrice={this.props.totalPrice}
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = store => {
	return {
		products: store.productState.products,
		cart: store.cartState.cart,
		totalPrice: store.cartState.totalPrice,
		isThanks: store.cartState.isThanks
	};
};

export default connect(mapStateToProps)(Checkout);
