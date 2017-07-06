/**
 * Created by Alexandra on 06.06.17.
 */

import React from 'react';
import { connect } from 'react-redux';

import ProductFilters from '../product-filters.jsx';
import ProductList from '../product-list.jsx';

import * as productApi from '../../api/product-api';
import * as cartApi from '../../api/cart-api';

class ProductListContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			dataSource: []
		};

		this.handleFilterBySize = this.handleFilterBySize.bind(this);
		this.handleFilterByIngredients = this.handleFilterByIngredients.bind(this);
		this.handleSearchProducts = this.handleSearchProducts.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleAddProductToCart = this.handleAddProductToCart.bind(this);
		this.handleDeleteProductFromCart = this.handleDeleteProductFromCart.bind(
			this
		);
	}

	handleFilterBySize(event, value) {
		productApi.filterBySize(event, value, this.props.products);
	}

	handleFilterByIngredients(event) {
		productApi.filterByIngredients(
			event.target.name,
			this.props.products,
			this.props.ingredientsChecked
		);
	}

	handleSearchProducts(value) {
		productApi.searchProducts(value, this.props.products);
	}

	handleInputChange(product, event) {
		productApi.getDisplayedProducts(this.props.products);
		productApi.increaseNumberProduct(
			product.id,
			event.target.value,
			this.props.products
		);
	}

	handleAddProductToCart(product) {
		productApi.getProducts();
		cartApi.addProductToCart(product, this.props.cart);
		cartApi.getTotalPrice(this.props.cart);
	}

	handleDeleteProductFromCart(product) {
		productApi.getProducts();
		cartApi.deleteProductFromCart(product, this.props.cart);
	}

	// Сашунька ну как можно быть такой красавицей\ ну Сааааш ну смотрю на тебя и радуюсь ну мур

	componentDidMount() {
		productApi.getProducts();
	}

	render() {
		return (
			<div className="container">
				<ProductFilters
					dataSource={this.state.dataSource}
					handleFilterBySize={this.handleFilterBySize}
					handleFilterByIngredients={this.handleFilterByIngredients}
					handleSearchProducts={this.handleSearchProducts}
				/>
				<ProductList
					displayedProducts={this.props.displayedProducts}
					cart={this.props.cart}
					totalPrice={this.props.totalPrice}
					handleInputChange={this.handleInputChange}
					handleAddProductToCart={this.handleAddProductToCart}
					handleDeleteProductFromCart={this.handleDeleteProductFromCart}
				/>
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
		totalPrice: store.cartState.totalPrice
	};
};

export default connect(mapStateToProps)(ProductListContainer);
