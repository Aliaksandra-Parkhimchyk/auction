/**
 * Created by a.parkhimchyk on 07.06.2017.
 */

import React from 'react';
import { connect } from 'react-redux';

import * as productApi from '../../api/product-api';
import * as cartApi from '../../api/cart-api';

import LoginForm from '../login-form.jsx';
import Cart from './cart.jsx';

export default class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			dataSource: []
		};
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<LoginForm dataSource={this.state.dataSource} />
					<Cart />
				</div>
			</div>
		);
	}
}
