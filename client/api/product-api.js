/**
 * Created by Alexandra on 14.06.17.
 */

import axios from 'axios';
import store from '../store';
import { getProductsSuccess } from '../actions/product-actions';

export function getProducts() {
    return axios.get('https://api.mlab.com/api/1/databases/pizzashop/collections/products?apiKey=9BGZZA0zukVJrmfAYnnLeG7V2DiUQNY_')
        .then(response => {
            store.dispatch(getProductsSuccess(response.data));
            return response;
        });
}