/**
 * Created by Alexandra on 14.06.17.
 */

import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
    products: []
};

const productReducer = function (state = initialState, action) {

    switch (action.type) {

        case types.GET_PRODUCTS_SUCCESS:
            return Object.assign({}, state, {products: action.products});
    }

    return state;
}

export default productReducer;