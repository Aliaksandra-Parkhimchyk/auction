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
                                handleUpdateInput={this.handleUpdateInput.bind(this)} />
                <ProductList displayedProducts={this.props.displayedProducts}/>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        products: store.productState.products,
        displayedProducts: store.productState.displayedProducts
    };
};

export default connect(mapStateToProps)(ProductListContainer);
