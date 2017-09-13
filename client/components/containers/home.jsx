/**
 * Created by a.parkhimchyk on 02.06.2017.
 */

import React from 'react';
import { connect } from 'react-redux';

import ProductFilters from '../product-filters.jsx';
import ProductList from '../product-list.jsx';
import Cart from './cart.jsx';

import * as productApi from '../../api/product-api';
import * as cartApi from '../../api/cart-api';

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.handleFilterBySize = this.handleFilterBySize.bind(this);
		this.handleFilterByIngredients = this.handleFilterByIngredients.bind(this);
		this.handleChangePriceFrom = this.handleChangePriceFrom.bind(this);
		this.handleChangePriceTo = this.handleChangePriceTo.bind(this);
		this.handleFilterByPrice = this.handleFilterByPrice.bind(this);
		this.handleSearchProducts = this.handleSearchProducts.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleAddProductToCart = this.handleAddProductToCart.bind(this);
	}

	handleFilterBySize(event, value) {
		const { products } = this.props;
		productApi.filterBySize(event, value, products);
	}

	handleFilterByIngredients(event) {
		const { products, ingredientsChecked } = this.props;
		productApi.filterByIngredients(
			event.target.name,
			products,
			ingredientsChecked
		);
	}

	handleChangePriceFrom(event, newValue) {
		productApi.changePriceFrom(newValue);
	}

	handleChangePriceTo(event, newValue) {
		productApi.changePriceTo(newValue);
	}

	handleFilterByPrice() {
		const { priceFrom, priceTo, products } = this.props;
		productApi.filterByPrice(priceFrom, priceTo, products);
	}

	handleSearchProducts(event) {
		const { products } = this.props;
		productApi.searchProducts(event.target.value, products);
	}

	handleInputChange(product, event) {
		const { products } = this.props;
		productApi.getDisplayedProducts(products);
		productApi.increaseNumberProduct(product.id, event.target.value, products);
	}

	handleAddProductToCart(product) {
		const { cart } = this.props;
		cartApi
			.addProductToCart(product, cart)
			.then(result => cartApi.getTotalPrice(result.cart))
			.catch(error => {
				alert(error.message);
			});
	}

	handleReset() {
		const { products } = this.props;
		productApi.getDisplayedProducts(products);
	}

	// Сашунька ну как можно быть такой красавицей\ ну Сааааш ну смотрю на тебя и радуюсь ну мур

	componentDidMount() {
		productApi.getProducts();
	}

	render() {
		const { displayedProducts, priceFrom, priceTo } = this.props;
		return (
			<div className="container">
				<ProductFilters
					priceFrom={priceFrom}
					priceTo={priceTo}
					handleFilterBySize={this.handleFilterBySize}
					handleFilterByIngredients={this.handleFilterByIngredients}
					handleChangePriceFrom={this.handleChangePriceFrom}
					handleChangePriceTo={this.handleChangePriceTo}
					handleFilterByPrice={this.handleFilterByPrice}
					handleSearchProducts={this.handleSearchProducts}
				/>
				<div className="row">
					<ProductList
						displayedProducts={displayedProducts}
						handleInputChange={this.handleInputChange}
						handleAddProductToCart={this.handleAddProductToCart}
					/>
					<Cart />
				</div>
			</div>
		);
	}
}

const mapStateToProps = store => {
	return {
		products: store.productState.products,
		displayedProducts: store.productState.displayedProducts,
		ingredientsChecked: store.productState.ingredientsChecked,
		cart: store.cartState.cart,
		priceFrom: store.productState.priceFrom,
		priceTo: store.productState.priceTo
	};
};

export default connect(mapStateToProps)(Home);
