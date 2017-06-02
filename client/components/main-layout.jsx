/**
 * Created by a.parkhimchyk on 02.06.2017.
 */

import React from 'react';
import Link from 'react-router-dom';

class MainLayout extends React.Component {
    render() {
        return (
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">Users</Link></li>
                <li><Link to="/products">Products</Link></li>
            </ul>
        )
    }
}

export default MainLayout;