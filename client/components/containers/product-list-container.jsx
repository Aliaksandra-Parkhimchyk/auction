/**
 * Created by Alexandra on 06.06.17.
 */

import React from 'react';
import {connect} from 'react-redux';

import ProductFilters from '../product-filters.jsx';
import ProductList from '../product-list.jsx';

import * as productApi from '../../api/product-api';
import store from '../../store';

class ProductListContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dataSource: []
        };

        this.onChange = this.onChange.bind(this);
        this.onCheck = this.onCheck.bind(this);
        this.handleUpdateInput = this.handleUpdateInput.bind(this);
    }

    onChange(event, value) {
        productApi.filterBySize(event, value, this.props.products);
    }

    onCheck(event) {
        productApi.filterByIngredients(event.target.name, this.props.products, this.props.ingredients);
    }

    handleUpdateInput(value) {
        productApi.searchProducts(value, this.props.products);
    }

    // Сашунька ну как можно быть такой красавицей\ ну Сааааш ну смотрю на тебя и радуюсь ну мур

    componentDidMount() {
        productApi.getProducts();
    }

    render() {
        return (
            <div className="container">
                <ProductFilters dataSource={this.state.dataSource}
                                onChange={this.onChange}
                                onCheck={this.onCheck}
                                handleUpdateInput={this.handleUpdateInput} />
                <ProductList displayedProducts={this.props.displayedProducts}/>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        products: store.productState.products,
        displayedProducts: store.productState.displayedProducts,
        ingredients: store.productState.ingredients
    };
};

export default connect(mapStateToProps)(ProductListContainer);
