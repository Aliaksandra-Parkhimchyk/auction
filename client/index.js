/**
 * Created by a.parkhimchyk on 01.06.2017.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/about.jsx';
import Home from './components/home.jsx';
import MainLayout from './components/main-layout.jsx';
import Products from './components/products.jsx';

ReactDOM.render((
    <BrowserRouter>
        <Route path="/" component={Home}/>
    </BrowserRouter>
), document.getElementById('root'));