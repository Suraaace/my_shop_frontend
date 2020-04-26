import React from 'react';
import {Link} from "react-router-dom";
import {GlobalStore} from "global-store-hook";

export const Header = (props) => {
    const store = GlobalStore();
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar-wrapper-frontend">
            <Link to={''}>Frontend Header</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to={'/'}>Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/product'}>Product</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/cart'}>Cart({store.get('cart').length})</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/login'}>Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={'/account'}>Account</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};