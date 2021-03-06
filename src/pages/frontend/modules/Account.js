import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {GlobalStore} from "global-store-hook";
import {
    Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export const Account = (props) => {

    const pagetitle = "Your Account";
    const [orders, setOrders] = useState([]);
    const store = GlobalStore();
    const user = store.get('user');
    
    useEffect(() => {
        axios.get(process.env.REACT_APP_API_HOST_URL+'/order/')
        .then((response) => {
            setOrders(response.data.data);
        }) 
        .catch(err=>err);
    }, []); // [] to stop the loop call
    
    return(
        <div>
            <div>
                <h2>{pagetitle}</h2>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/account/active-orders">My Active Orders</Link> |
                        </li>
                        <li className="nav-item">
                            <Link to="/account/order-history">Order History</Link> |
                        </li>
                        <li className="nav-item">
                            <Link to="/account/my-profile">My Profile</Link>
                        </li>
                    </ul>
                    </div>
                </nav>

                <Route path="/account/active-orders">
                    <ActiveOrder />
                </Route>
                <Route path="/account/order-history">
                    <OrderHistory orders={orders}/>
                </Route>
                <Route path="/account/my-profile">
                    <MyProfile />
                </Route>

            </div>            
        </div>                     
    )

};

function ActiveOrder() {
    return (
        <div>
            <h2>Active Order</h2>
            <p>Active Order</p>
        </div>
    );
}

function OrderHistory(props) {
    return (
        <div>
            <h2>Order History</h2>
            <table className={'table'}>
                <tbody>
                {
                    props.orders.map((order, i) => {
                        return (
                            <tr key ={i}>
                                <td>{order.product ? order.product.name : ''}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    );
}

function MyProfile() {
    return (
        <div>
            <h2>My Profile</h2>
            <p>My Profile</p>
        </div>
    );
}