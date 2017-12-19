/**
 * Created by Alexandra on 06.06.17.
 */

import React from 'react';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

export default props => {
    return (
        <div className="row">
            <div className="col-md-3 col-sm-3">
                <div className="filter-size">
                    <h3 className="filter-size-title">Size:</h3>
                    <RadioButtonGroup
                        name="filterSize"
                        defaultSelected="all"
                        onChange={props.handleFilterBySize}
                    >
                        <RadioButton value="all" label="All"/>
                        <RadioButton value="big" label="Big"/>
                        <RadioButton value="small" label="Small"/>
                    </RadioButtonGroup>
                </div>
            </div>

            <div className="col-md-3 col-sm-3">
                <div className="filter-ingredients">
                    <h3 className="filter-ingredients-title">Ingredients:</h3>
                    <Checkbox
                        label="Beef"
                        name="beaf"
                        onCheck={props.handleFilterByIngredients}
                    />
                    <Checkbox
                        label="Chicken"
                        name="chicken"
                        onCheck={props.handleFilterByIngredients}
                    />
                    <Checkbox
                        label="Pepper"
                        name="pepper"
                        onCheck={props.handleFilterByIngredients}
                    />
                </div>
            </div>

            <div className="col-md-3 col-sm-3">
                <div className="filter-price">
                    <h3 className="filter-ingredients-title">Price:</h3>
                    <p className="price-from">
                        From: ${props.priceFrom ? props.priceFrom : 0}
                    </p>
                    <Slider
                        min={0}
                        max={10}
                        step={0.1}
                        onChange={props.handleChangePriceFrom}
                    />
                    <p className="price-to">To: ${props.priceTo ? props.priceTo : 0}</p>
                    <Slider
                        min={0}
                        max={10}
                        step={0.1}
                        onChange={props.handleChangePriceTo}
                    />
                    <RaisedButton label="Show" onTouchTap={props.handleFilterByPrice}/>
                </div>
            </div>

            <div className="col-md-3 col-sm-3">
                <div className="filter-search">
                    <h3 className="filter-search-title">Search:</h3>
                    <TextField
                        hintText="Search"
                        floatingLabelText="Search"
                        fullWidth={true}
                        onChange={props.handleSearchProducts}
                    />
                </div>
            </div>
        </div>
    );
};
