/**
 * Created by Alexandra on 05.09.17.
 */

import * as types from '../actions/action-types';

const initialState = {
    contact_us_form: {
        name: '',
        email: '',
        query: '',
    },
    isThanksForQuery: false
};

const contactUsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_INPUT_NAME_CONTACT_US_FORM:
            return Object.assign({}, state, {
                contact_us_form: Object.assign({}, state.contact_us_form, {
                    name: action.name
                })
            });

        case types.UPDATE_INPUT_EMAIL_CONTACT_US_FORM:
            return Object.assign({}, state, {
                contact_us_form: Object.assign({}, state.contact_us_form, {
                    email: action.email
                })
            });

        case types.UPDATE_INPUT_QUERY_CONTACT_US_FORM:
            return Object.assign({}, state, {
                contact_us_form: Object.assign({}, state.contact_us_form, {
                    query: action.query
                })
            });

        case types.SEND_CONTACT_US_FORM:
            return Object.assign({}, state, {
                isThanksForQuery: action.isThanksForQuery
            });
    }

    return state;
};

export default contactUsReducer;
