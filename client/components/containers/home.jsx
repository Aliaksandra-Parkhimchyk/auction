/**
 * Created by a.parkhimchyk on 02.06.2017.
 */

import React from 'react';
import ProductListContainer from './product-list-container.jsx';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <ProductListContainer />;
	}
}
