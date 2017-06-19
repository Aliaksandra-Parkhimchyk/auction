/**
 * Created by Alexandra on 16.06.17.
 */

import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
    cart: []
};

const cartReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.GET_CART_SUCCESS:
            return Object.assign({}, state, {cart: action.cart});
    }

    return state;
}

export default cartReducer;