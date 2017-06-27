/**
 * Created by Alexandra on 06.06.17.
 */

import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import Checkbox from 'material-ui/Checkbox';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

const styles = {
	AutoComplete: {},
	checkbox: {},
	radioButton: {}
};

export default props => {
	return (
		<div className="row">
			<div className="col-md-3">
				<div className="filter-size">
					<h3 className="filter-size-title">Size:</h3>
					<RadioButtonGroup
						name="filterSize"
						defaultSelected="all"
						onChange={props.onChange}
					>
						<RadioButton value="all" label="All" style={styles.radioButton} />
						<RadioButton value="big" label="Big" style={styles.radioButton} />
						<RadioButton
							value="small"
							label="Small"
							style={styles.radioButton}
						/>
					</RadioButtonGroup>
				</div>
			</div>

			<div className="col-md-3">
				<div className="filter-ingredients">
					<h3 className="filter-ingredients-title">Ingredients:</h3>
					<Checkbox
						label="Beef"
						style={styles.checkbox}
						name="beaf"
						onCheck={props.onCheck}
					/>
					<Checkbox
						label="Chicken"
						style={styles.checkbox}
						name="chicken"
						onCheck={props.onCheck}
					/>
					<Checkbox
						label="Pepper"
						style={styles.checkbox}
						name="pepper"
						onCheck={props.onCheck}
					/>
				</div>
			</div>

			<div className="col-md-3">
				<div className="filter-price">
					<h3 className="filter-ingredients-title">Price:</h3>
					<AutoComplete
						hintText="From"
						dataSource={props.dataSource}
						floatingLabelText="From"
						fullWidth={true}
					/>
					<AutoComplete
						hintText="To"
						dataSource={props.dataSource}
						floatingLabelText="To"
						fullWidth={true}
					/>
				</div>
			</div>

			<div className="col-md-3">
				<div className="filter-search">
					<h3 className="filter-search-title">Search:</h3>
					<AutoComplete
						hintText="Search"
						dataSource={props.dataSource}
						floatingLabelText="Search"
						fullWidth={true}
						onUpdateInput={props.handleUpdateInput}
					/>
				</div>
			</div>
		</div>
	);
};