/**
 * Created by Alexandra on 06.06.17.
 */

import React from 'react';
import { Image } from 'material-ui-image';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

export default props => {
	return (
		<div className="col-md-9 col-sm-9">
			<div className="row">
				{props.displayedProducts.map(product => {
					const { id, title, src, num } = product;
					return (
						<div key={id} className="col-md-4 col-sm-4">
							<div className="product-item">
								<h3 className="product-item-title">{title}</h3>
								<Link to={'' + title}>{title}</Link>
								<Image src={src} className="product-item-image" />
								<input
									name="products-number"
									type="number"
									min="1"
									max="10"
									value={num}
									onChange={props.handleInputChange.bind(null, product)}
								/>
								<RaisedButton
									label="Order"
									className="product-item-order"
									onTouchTap={props.handleAddProductToCart.bind(null, product)}
								/>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
