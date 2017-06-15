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
        // store.subscribe(() => {
        //     this.setState({
        //         products: store.getState().productState.products
        //     });
        //     console.log(this.state.products);
        // });
    }

    handleUpdateInput(value) {

        let searchQuery = value.toLowerCase();

        console.log(searchQuery);

        let displayedContacts = this.props.products.filter(function(el) {
            let searchValue = el.title.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });

        console.log(displayedContacts);
    }

    // Сашунька ну как можно быть такой красавицей\ ну Сааааш ну смотрю на тебя и радуюсь ну мур

    componentWillMount() {
        productApi.getProducts();
    }

    render() {
        return (
            <div className="container">
                <ProductFilters dataSource={this.state.dataSource} handleUpdateInput={this.handleUpdateInput} />
                <ProductList products={this.props.products} />
            </div>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        products: store.productState.products
    };
};

export default connect(mapStateToProps)(ProductListContainer);
