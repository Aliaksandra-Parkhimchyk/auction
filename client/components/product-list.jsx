/**
 * Created by Alexandra on 06.06.17.
 */

import React from 'react';
import {Image} from 'material-ui-image'
import RaisedButton from 'material-ui/RaisedButton';

export default function (props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {props.products.map(product => {

                            return (
                                <div className="col-md-4">
                                    <div key={product.id}>
                                        <h3>{product.title}</h3>
                                        <Image
                                            src={product.src}
                                        />
                                        <RaisedButton label="Order" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}