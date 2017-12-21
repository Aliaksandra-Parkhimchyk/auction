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
import 'normalize.css/normalize.css';

import { pink900 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
	fontFamily: 'Open Sans, sans-serif',
	palette: {
		textColor: pink900
	}
});

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider muiTheme={muiTheme}>
			<Router />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root')
);
