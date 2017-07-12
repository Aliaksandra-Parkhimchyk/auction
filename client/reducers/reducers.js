/**
 * Created by Alexandra on 14.06.17.
 */

import { combineReducers } from 'redux';

import productReducer from './product-reducer';
import cartReducer from './cart-reducer';
import formReducer from './form-reducer';
import signUpReducer from './sign-up-reducer';
import loginLogoutReducer from './login-logout-redicer';

const reducers = combineReducers({
	productState: productReducer,
	cartState: cartReducer,
	formState: formReducer,
	signUpState: signUpReducer,
	loginLogoutState: loginLogoutReducer
});

export default reducers;
