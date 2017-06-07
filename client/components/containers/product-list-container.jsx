/**
 * Created by Alexandra on 06.06.17.
 */

import React from 'react';
import axios from 'axios';

import ProductList from '../product-list.jsx';

class ProductListContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {products: []};
    }

    componentDidMount() {
        axios.get('https://api.mlab.com/api/1/databases/pizzashop/collections/products?apiKey=9BGZZA0zukVJrmfAYnnLeG7V2DiUQNY_')
            .then(response => this.setState({products: response.data}));
    }

    render() {
        return (<ProductList products={this.state.products}/>);
    }
}

export default ProductListContainer;