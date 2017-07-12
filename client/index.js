/**
 * Created by a.parkhimchyk on 01.06.2017.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Router from './router';

// for the latest version react-router (4.1.1)
// import { HashRouter, Route, Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider>
			<Router />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root')
);
