/**
 * Created by Alexandra on 14.06.17.
 */

import store from '../store';
import { getCartSuccess } from '../actions/cart-actions';

export function getCart() {
    return store.dispatch(getCartSuccess());

}