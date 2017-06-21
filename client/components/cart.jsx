/**
 * Created by Alexandra on 20.06.17.
 */

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    RaisedButton: {
        backgroundColor: '#880E4F'
    }
};

export default (props) => {
    return (
        <div className="col-md-3">
            <div className="cart">
                <h3>Your cart</h3>
                <p>All goods:</p>
                <RaisedButton
                    label="X"
                    className="delete-item"/>
                <p className="total">Total:</p>
                <RaisedButton className="checkout" label="Checkout" style={style.raisedButton}/>
            </div>
        </div>
    );
}