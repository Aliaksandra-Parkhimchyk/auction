/**
 * Created by Alexandra on 06.06.17.
 */

import React from 'react';
import {Image} from 'material-ui-image'
import RaisedButton from 'material-ui/RaisedButton';

export default (props) => {
    return (
        <div className="row">
            <div className="col-md-9">
                <div className="row">
                    {props.displayedProducts.map(product => {
                        return (
                            <div key={product.id} className="col-md-4">
                                <div className="product-item">
                                    <h3 className="product-item-title">{product.title}</h3>
                                    <Image
                                        src={product.src}
                                        className="product-item-image"/>
                                    <RaisedButton
                                        label="Order"
                                        className="product-item-order"/>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}