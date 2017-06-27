/**
 * Created by Alexandra on 20.06.17.
 */

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

export default props => {
	return props.cart.length > 0
		? <div className="col-md-3">
				<div className="cart">
					<h3>Your cart</h3>
					<p>All goods: {props.cart.length}</p>
					{props.cart.map(item => {
						return (
							<div key={item.id}>
								<RaisedButton
									label="X"
									className="delete-item"
									onTouchTap={props.handleDeleteProductFromCart.bind(
										null,
										item
									)}
								/>
								<p>{item.title} * {item.num} = ${item.price * item.num}</p>
							</div>
						);
					})}
					<p className="total">Total: ${props.totalPrice}</p>
					<Link className="checkout" to={'/checkout'}>Checkout</Link>
				</div>
			</div>
		: null;
};
