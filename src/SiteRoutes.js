import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'axios-progress-bar/dist/nprogress.css';

import {loadProgressBar} from 'axios-progress-bar';

import {
    Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import history from "./helper/history";
import {FrontendRoutes} from "./Routes/FrontendRoutes";
import Home from "./pages/frontend/modules/Home";
import {Product} from "./pages/frontend/modules/Product";
import {Login} from "./pages/frontend/modules/Login";
import {SignUp} from "./pages/frontend/modules/SignUp";

import {ProductDetail} from "./pages/frontend/modules/ProductDetail";
import {ProductListing} from "./pages/frontend/modules/ProductListing";
import {Cart} from "./pages/frontend/modules/Cart";
import {Account} from "./pages/frontend/modules/Account";
import {OrderConfirm} from "./pages/frontend/modules/OrderConfirm";

import {GlobalStoreProvider, GlobalStore} from 'global-store-hook';
// import { SignUp } from './pages/frontend/modules/SignUp';

export const SiteRoutes = (props) => {
    
    loadProgressBar();

    let cart = localStorage.getItem('cart');
    if(!cart) {
        cart = [];
    } else {
        cart = JSON.parse(cart);
    }

    const init = {
        cart: cart,
        user: {
            _id: "5e78c54d79771f735e168589",
            name: "Kiran Mulmi",
            //email: "a"
        }
    };

    return (
        <GlobalStoreProvider initValues={init}>
            <Router history={history}>
            <Switch>

                {/* frontend routes*/}
                <FrontendRoutes exact path={'/'} component={Home}/>
                <FrontendRoutes exact path={'/product'} component={Product}/>
                <FrontendRoutes exact path={'/product/details/:itemId'} component={ProductDetail}/>
                <FrontendRoutes exact path={'/category/details/:itemId'} component={ProductListing}/>
                <FrontendRoutes exact path={'/cart'} component={Cart}/>
                <FrontendRoutes exact path={'/login'} component={Login}/>
                <FrontendRoutes path={'/signUp'} component={SignUp} />
                <FrontendRoutes path={'/account'} component={Account}/>
                <FrontendRoutes exact path={'/orderConfirm'} component={OrderConfirm}/>

                



            </Switch>
        </Router>
        </GlobalStoreProvider>
    );
};