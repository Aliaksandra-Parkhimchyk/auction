/**
 * Created by a.parkhimchyk on 06.09.2017.
 */

import * as actionCreatorsCartActions from '../actions/cart-actions';
import * as actionCreatorsContactUsActions from '../actions/contact-us-actions';
import * as actionCreatorsFormActions from '../actions/form-actions';
import * as actionCreatorsLoginLogoutActions
	from '../actions/login-logout-actions';
import * as actionCreatorsProductActions from '../actions/product-actions';
import * as actionCreatorsSignUpActions from '../actions/sign-up-actions';
import * as types from '../actions/action-types';
import expect from 'expect';

describe('actions', () => {
	it('action creator add product to cart', () => {
		const cart = [];
		const expectedAction = {
			type: types.ADD_PRODUCT_TO_CART,
			cart
		};
		expect(
			actionCreatorsCartActions.actionCreatorAddProductToCart(cart)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator delete product from cart', () => {
		const cart = [];
		const expectedAction = {
			type: types.DELETE_PRODUCT_FROM_CART,
			cart
		};
		expect(
			actionCreatorsCartActions.actionCreatorDeleteProductFromCart(cart)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator get total price', () => {
		const totalPrice = 0;
		const expectedAction = {
			type: types.GET_TOTAL_PRICE,
			totalPrice
		};
		expect(
			actionCreatorsCartActions.actionCreatorGetTotalPrice(totalPrice)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator send order form', () => {
		const cart = [];
		const isThanksForPurchase = false;
		const expectedAction = {
			type: types.SEND_ORDER_FORM,
			cart,
			isThanksForPurchase
		};
		expect(
			actionCreatorsCartActions.actionCreatorSendOrderForm(
				cart,
				isThanksForPurchase
			)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator send order form', () => {
		const cart = [];
		const isThanksForPurchase = true;
		const expectedAction = {
			type: types.SEND_ORDER_FORM,
			cart,
			isThanksForPurchase
		};
		expect(
			actionCreatorsCartActions.actionCreatorSendOrderForm(
				cart,
				isThanksForPurchase
			)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator update input name for contact us form', () => {
		const name = 'Sasha';
		const expectedAction = {
			type: types.UPDATE_INPUT_NAME_CONTACT_US_FORM,
			name
		};
		expect(
			actionCreatorsContactUsActions.actionCreatorUpdateInputNameContactUsForm(
				name
			)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator update input email for contact us form', () => {
		const email = 'parhimchik1995@mail.ru';
		const expectedAction = {
			type: types.UPDATE_INPUT_EMAIL_CONTACT_US_FORM,
			email
		};
		expect(
			actionCreatorsContactUsActions.actionCreatorUpdateInputEmailContactUsForm(
				email
			)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator update input query for contact us form', () => {
		const query = 'Hello!';
		const expectedAction = {
			type: types.UPDATE_INPUT_QUERY_CONTACT_US_FORM,
			query
		};
		expect(
			actionCreatorsContactUsActions.actionCreatorUpdateInputQueryContactUsForm(
				query
			)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator send contact us form', () => {
		const isThanksForQuery = false;
		const expectedAction = {
			type: types.SEND_CONTACT_US_FORM,
			isThanksForQuery
		};
		expect(
			actionCreatorsContactUsActions.actionCreatorSendContactUsForm(
				isThanksForQuery
			)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator send contact us form', () => {
		const isThanksForQuery = true;
		const expectedAction = {
			type: types.SEND_CONTACT_US_FORM,
			isThanksForQuery
		};
		expect(
			actionCreatorsContactUsActions.actionCreatorSendContactUsForm(
				isThanksForQuery
			)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator update input name for order form', () => {
		const name = 'Sasha';
		const expectedAction = {
			type: types.UPDATE_INPUT_NAME_ORDER_FORM,
			name
		};
		expect(
			actionCreatorsFormActions.actionCreatorUpdateInputNameOrderForm(name)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator update input email for order form', () => {
		const email = 'parhimchik1995@mail.ru';
		const expectedAction = {
			type: types.UPDATE_INPUT_EMAIL_ORDER_FORM,
			email
		};
		expect(
			actionCreatorsFormActions.actionCreatorUpdateInputEmailOrderForm(email)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator update input phone for order form', () => {
		const phone = '+375447584425';
		const expectedAction = {
			type: types.UPDATE_INPUT_PHONE_ORDER_FORM,
			phone
		};
		expect(
			actionCreatorsFormActions.actionCreatorUpdateInputPhoneOrderForm(phone)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator update input city for order form', () => {
		const city = 'Minsk';
		const expectedAction = {
			type: types.UPDATE_INPUT_CITY_ORDER_FORM,
			city
		};
		expect(
			actionCreatorsFormActions.actionCreatorUpdateInputCityOrderForm(city)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator update input street for order form', () => {
		const street = 'Denisovskaya';
		const expectedAction = {
			type: types.UPDATE_INPUT_STREET_ORDER_FORM,
			street
		};
		expect(
			actionCreatorsFormActions.actionCreatorUpdateInputStreetOrderForm(street)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator update input house for order form', () => {
		const house = '51';
		const expectedAction = {
			type: types.UPDATE_INPUT_HOUSE_ORDER_FORM,
			house
		};
		expect(
			actionCreatorsFormActions.actionCreatorUpdateInputHouseOrderForm(house)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator update input apartment for order form', () => {
		const apartment = '51';
		const expectedAction = {
			type: types.UPDATE_INPUT_APARTMENT_ORDER_FORM,
			apartment
		};
		expect(
			actionCreatorsFormActions.actionCreatorUpdateInputApartmentOrderForm(
				apartment
			)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator update input access for order form', () => {
		const access = '1';
		const expectedAction = {
			type: types.UPDATE_INPUT_ACCESS_ORDER_FORM,
			access
		};
		expect(
			actionCreatorsFormActions.actionCreatorUpdateInputAccessOrderForm(access)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator update input floor for order form', () => {
		const floor = '2';
		const expectedAction = {
			type: types.UPDATE_INPUT_FLOOR_ORDER_FORM,
			floor
		};
		expect(
			actionCreatorsFormActions.actionCreatorUpdateInputFloorOrderForm(floor)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator update input additionalInformation for order form', () => {
		const additionalInformation = 'Hello!';
		const expectedAction = {
			type: types.UPDATE_INPUT_ADDITIONAL_INFORMATION_ORDER_FORM,
			additionalInformation
		};
		expect(
			actionCreatorsFormActions.actionCreatorUpdateInputAdditionalInformationOrderForm(
				additionalInformation
			)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator update input paymentTheInternet for order form', () => {
		const paymentTheInternet = '1';
		const expectedAction = {
			type: types.CHANGE_PAYMENT_THE_INTERNET_ORDER_FORM,
			paymentTheInternet
		};
		expect(
			actionCreatorsFormActions.actionCreatorChangePaymentTheInternetOrderForm(
				paymentTheInternet
			)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator update input isCheckCutPizza for order form', () => {
		const isCheckCutPizza = false;
		const expectedAction = {
			type: types.CHECK_CUT_PIZZA_ORDER_FORM,
			isCheckCutPizza
		};
		expect(
			actionCreatorsFormActions.actionCreatorCheckCutPizzaOrderForm(
				isCheckCutPizza
			)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator update input name for login/logout form', () => {
		const name = 'Sasha';
		const expectedAction = {
			type: types.UPDATE_INPUT_NAME_LOGIN_FORM,
			name
		};
		expect(
			actionCreatorsLoginLogoutActions.actionCreatorUpdateInputNameLoginForm(
				name
			)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator update input password for login/logout form', () => {
		const password = '***';
		const expectedAction = {
			type: types.UPDATE_INPUT_PASSWORD_LOGIN_FORM,
			password
		};
		expect(
			actionCreatorsLoginLogoutActions.actionCreatorUpdateInputPasswordLoginForm(
				password
			)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator login', () => {
		const currentUser = 'Sasha';
		const expectedAction = {
			type: types.LOGIN,
			currentUser
		};
		expect(
			actionCreatorsLoginLogoutActions.actionCreatorLogin(currentUser)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator logout', () => {
		const currentUser = 'Sasha';
		const expectedAction = {
			type: types.LOGOUT,
			currentUser
		};
		expect(
			actionCreatorsLoginLogoutActions.actionCreatorLogout(currentUser)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator get current user', () => {
		const currentUser = 'Sasha';
		const expectedAction = {
			type: types.GET_CURRENT_USER,
			currentUser
		};
		expect(
			actionCreatorsLoginLogoutActions.actionCreatorGetCurrentUser(currentUser)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator get products', () => {
		const products = [];
		const expectedAction = {
			type: types.GET_PRODUCTS,
			displayedProducts: products,
			products
		};
		expect(
			actionCreatorsProductActions.actionCreatorGetProducts(products)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator get displayed products', () => {
		const products = [];
		const expectedAction = {
			type: types.GET_DISPLAYED_PRODUCTS,
			displayedProducts: products
		};
		expect(
			actionCreatorsProductActions.actionCreatorGetDisplayedProducts(products)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator filter by size', () => {
		const displayedProducts = [];
		const expectedAction = {
			type: types.FILTER_BY_SIZE,
			displayedProducts
		};
		expect(
			actionCreatorsProductActions.actionCreatorFilterBySize(displayedProducts)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator filter by ingredients', () => {
		const displayedProducts = [];
		const expectedAction = {
			type: types.FILTER_BY_INGREDIENTS,
			displayedProducts
		};
		expect(
			actionCreatorsProductActions.actionCreatorFilterByIngredients(
				displayedProducts
			)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator search products', () => {
		const displayedProducts = [];
		const expectedAction = {
			type: types.SEARCH_PRODUCTS,
			displayedProducts
		};
		expect(
			actionCreatorsProductActions.actionCreatorSearchProducts(
				displayedProducts
			)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator increase number product', () => {
		const displayedProducts = [];
		const expectedAction = {
			type: types.INCREASE_NUMBER_PRODUCT,
			displayedProducts
		};
		expect(
			actionCreatorsProductActions.actionCreatorIncreaseNumberProduct(
				displayedProducts
			)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator update name for sign up form', () => {
		const name = 'Sasha';
		const expectedAction = {
			type: types.UPDATE_INPUT_NAME_SIGN_UP_FORM,
			name
		};
		expect(
			actionCreatorsSignUpActions.actionCreatorUpdateInputNameSignUpForm(name)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator update email for sign up form', () => {
		const email = 'parhimchik1995@mail.ru';
		const expectedAction = {
			type: types.UPDATE_INPUT_EMAIL_SIGN_UP_FORM,
			email
		};
		expect(
			actionCreatorsSignUpActions.actionCreatorUpdateInputEmailSignUpForm(email)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator update password for sign up form', () => {
		const password = '***';
		const expectedAction = {
			type: types.UPDATE_INPUT_PASSWORD_SIGN_UP_FORM,
			password
		};
		expect(
			actionCreatorsSignUpActions.actionCreatorUpdateInputPasswordSignUpForm(
				password
			)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator update phone for sign up form', () => {
		const phone = '+375447584425';
		const expectedAction = {
			type: types.UPDATE_INPUT_PHONE_SIGN_UP_FORM,
			phone
		};
		expect(
			actionCreatorsSignUpActions.actionCreatorUpdateInputPhoneSignUpForm(phone)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator update city for sign up form', () => {
		const city = 'Minsk';
		const expectedAction = {
			type: types.UPDATE_INPUT_CITY_SIGN_UP_FORM,
			city
		};
		expect(
			actionCreatorsSignUpActions.actionCreatorUpdateInputCitySignUpForm(city)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator update street for sign up form', () => {
		const street = 'Denisovskaya';
		const expectedAction = {
			type: types.UPDATE_INPUT_STREET_SIGN_UP_FORM,
			street
		};
		expect(
			actionCreatorsSignUpActions.actionCreatorUpdateInputStreetSignUpForm(
				street
			)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator update house for sign up form', () => {
		const house = '51';
		const expectedAction = {
			type: types.UPDATE_INPUT_HOUSE_SIGN_UP_FORM,
			house
		};
		expect(
			actionCreatorsSignUpActions.actionCreatorUpdateInputHouseSignUpForm(house)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator update apartment for sign up form', () => {
		const apartment = '9';
		const expectedAction = {
			type: types.UPDATE_INPUT_APARTMENT_SIGN_UP_FORM,
			apartment
		};
		expect(
			actionCreatorsSignUpActions.actionCreatorUpdateInputApartmentSignUpForm(
				apartment
			)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator update access for sign up form', () => {
		const access = '1';
		const expectedAction = {
			type: types.UPDATE_INPUT_ACCESS_SIGN_UP_FORM,
			access
		};
		expect(
			actionCreatorsSignUpActions.actionCreatorUpdateInputAccessSignUpForm(
				access
			)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator update floor for sign up form', () => {
		const floor = '2';
		const expectedAction = {
			type: types.UPDATE_INPUT_FLOOR_SIGN_UP_FORM,
			floor
		};
		expect(
			actionCreatorsSignUpActions.actionCreatorUpdateInputFloorSignUpForm(floor)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator sign up form', () => {
		const isThanksForRegistration = false;
		const expectedAction = {
			type: types.SIGN_UP_FORM,
			isThanksForRegistration
		};
		expect(
			actionCreatorsSignUpActions.actionCreatorSignUpForm(
				isThanksForRegistration
			)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator sign up form', () => {
		const isThanksForRegistration = true;
		const expectedAction = {
			type: types.SIGN_UP_FORM,
			isThanksForRegistration
		};
		expect(
			actionCreatorsSignUpActions.actionCreatorSignUpForm(
				isThanksForRegistration
			)
		).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('action creator get registered users', () => {
		const registered_users = [];
		const expectedAction = {
			type: types.GET_REGISTERED_USERS,
			registered_users
		};
		expect(
			actionCreatorsSignUpActions.actionCreatorGetRegisteredUsers(
				registered_users
			)
		).toEqual(expectedAction);
	});
});
