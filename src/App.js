import React, { Component } from 'react'
import store from './store/store'
import {Provider} from 'react-redux'
import Home from './components/Home'
import Product from './components/Product'
import Products from './components/Products'
import Cart from './components/Cart'
import CartIcon from './components/CartIcon'

import {BrowserRouter, Route, Link} from 'react-router-dom'



class App extends Component {

    render() {
        return (
    <BrowserRouter>
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="#">Cats Store</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/'>Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/products'>Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/cart'>Cart</Link>
                        </li>
                    </ul>
                </div>
                <CartIcon />
            </nav>

            <Route path="/" exact component={Home} />
            <Route path="/products" exact component={Products} />
            <Route path="/products/:id" component={Product} />
            <Route path="/cart" component={Cart} />
        </div>
    </BrowserRouter>
         
        );
    }
}

function AppWithStore () {
    return <Provider store={store}><App/></Provider>
    
}

export default AppWithStore;