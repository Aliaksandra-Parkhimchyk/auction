/**
 * Created by a.parkhimchyk on 01.06.2017.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router'

// for the latest version react-router (4.1.1)
// import { HashRouter, Route, Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import About from './components/about.jsx';
import ContactUs from './components/contact-us.jsx';
import Delivery from './components/delivery.jsx';
import Home from './components/home.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import injectTapEventPlugin from 'react-tap-event-plugin';

const styles = {
    appBar: {
        backgroundColor: '#880E4F'
    },
    appBarTitle: {
        color: '#E0E0E0',
        cursor: 'pointer'
    },
    paper: {
        height: '1000px',
        width: '100%',
        display: 'inline-block',
    }
};

class MainLayout extends React.Component {

    componentDidMount() {
        injectTapEventPlugin();
    }

    render() {
        return (
            <div className="app">

                <AppBar

                    style={styles.appBar}
                    title={<span className="logo" style={styles.appBarTitle}>Site Name</span>}>

                    <ul className="header-nav">
                        <li><Link className="nav-item" activeClassName="active" to="/">Home</Link></li>
                        <li><Link className="nav-item" activeClassName="active" to="/about">About</Link></li>
                        <li><Link className="nav-item" activeClassName="active" to="/delivery">Delivery</Link></li>
                        <li><Link className="nav-item" activeClassName="active" to="/contact-us">Contact us</Link></li>
                    </ul>

                </AppBar>

                <Paper style={styles.paper} zDepth={5}>
                    {this.props.children}
                </Paper>

            </div>
        )
    }
}

ReactDOM.render((
    <MuiThemeProvider>
        <Router history={browserHistory}>
            <Route path="/" component={MainLayout}>
                <IndexRoute component={Home} />
                <Route path="about" component={About}/>
                <Route path="delivery" component={Delivery}/>
                <Route path="contact-us" component={ContactUs}/>
            </Route>
        </Router>
    </MuiThemeProvider>
), document.getElementById('root'));

