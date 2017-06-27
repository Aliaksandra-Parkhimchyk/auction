/**
 * Created by Alexandra on 06.06.17.
 */

import React from 'react';
import Cart from './cart.jsx';
import { Image } from 'material-ui-image';
import RaisedButton from 'material-ui/RaisedButton';

export default props => {
	return (
		<div className="row">
			<div className="col-md-9">
				<div className="row">
					{props.displayedProducts.map(product => {
						return (
							<div key={product.id} className="col-md-4">
								<div className="product-item">
									<h3 className="product-item-title">{product.title}</h3>
									<Image src={product.src} className="product-item-image" />
									<input
										name="products-number"
										type="number"
										min="1"
										max="10"
										value={product.num}
										onChange={props.handleInputChange.bind(null, product)}
									/>
									<RaisedButton
										label="Order"
										className="product-item-order"
										onTouchTap={props.handleAddProductToCart.bind(
											null,
											product
										)}
									/>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<Cart
				cart={props.cart}
				handleDeleteProductFromCart={props.handleDeleteProductFromCart}
				totalPrice={props.totalPrice}
			/>
		</div>
	);
};
