/**
 * Created by Alexandra on 05.09.17.
 */

import * as types from '../actions/action-types';

export function actionCreatorUpdateInputNameContactUsForm(name) {
    return {
        type: types.UPDATE_INPUT_NAME_CONTACT_US_FORM,
        name: name
    };
}

export function actionCreatorUpdateInputEmailContactUsForm(email) {
    return {
        type: types.UPDATE_INPUT_EMAIL_CONTACT_US_FORM,
        email: email
    };
}

export function actionCreatorUpdateInputQueryContactUsForm(query) {
    return {
        type: types.UPDATE_INPUT_QUERY_CONTACT_US_FORM,
        query
    };
}

export function actionCreatorSendContactUsForm(isThanksForQuery) {
    return {
        type: types.SEND_CONTACT_US_FORM,
        isThanksForQuery
    };
}
