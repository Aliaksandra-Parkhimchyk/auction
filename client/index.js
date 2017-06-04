/**
 * Created by a.parkhimchyk on 01.06.2017.
 */

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Route } from 'react-router-dom';
// import About from './components/about.jsx';
// import Home from './components/home.jsx';
// import MainLayout from './components/main-layout.jsx';
// import Products from './components/products.jsx';
//
// ReactDOM.render((
//     <BrowserRouter>
//         <Route path="/" component={Home}/>
//     </BrowserRouter>
// ), document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

// for the latest version react-router (4.1.1)
// import { HashRouter, Route, Link} from 'react-router-dom';

class MainLayout extends React.Component{
    render() {
        return (
            <div className="app">
                <header className="primary-header"></header>
                <aside className="primary-aside">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/users">Users</Link></li>
                        <li><Link to="/products">Products</Link></li>
                    </ul>
                </aside>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

class Home extends React.Component{
    render() {
        return <h1>Home Page</h1>;
    }
}

class About extends React.Component{
    render() {
        return <h1>About Page</h1>;
    }
}

class SearchLayout extends React.Component{
    render() {
        return (
            <div className="search">
                <header className="search-header"></header>
                <div className="results">
                    {this.props.children}
                </div>
                <div className="search-footer pagination"></div>
            </div>
        )
    }
}

class UserList extends React.Component{
    render() {
        return (
            <ul className="user-list">
                <li>User 1</li>
                <li>User 2</li>
                <li>User 3</li>
            </ul>
        )
    }
}

class ProductsList extends React.Component{
    render() {
        return (
            <ul className="products-list">
                <li>Products 1</li>
                <li>Products 2</li>
                <li>Products 3</li>
            </ul>
        )
    }
}

ReactDOM.render((
    <Router>
        <Route path="/" component={MainLayout}>
            <IndexRoute component={Home} />
            <Route path="about" component={About} />
            <Route component={SearchLayout}>
                <div>
                    <Route path="users" component={UserList} />
                    <Route path="products" component={ProductsList} />
                </div>
            </Route>
        </Route>
    </Router>
), document.getElementById('root'))

