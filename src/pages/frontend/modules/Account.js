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
    const [userInfo, setUserInfo] = useState({});
    
    
    useEffect(() => {
        let id = user.id;
        axios.get(process.env.REACT_APP_API_HOST_URL+'/order/')
        .then((response) => {
            setOrders(response.data.data);
        }) 
        .catch(err=>err);

        // axios.get(process.env.REACT_APP_API_HOST_URL+'/user/'+id)
        //     .then((response)=>{
        //         setUserInfo(response.data.data);
        //     })
        //     .catch(err => err);
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
                    <MyProfile user={userInfo} />
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

function MyProfile(props) {
    const store = GlobalStore();
    const user = store.get('user');
    const [userInfo, setUserInfo] = useState({});

    useEffect(()=>{
        let id = user._id;
    axios.get(process.env.REACT_APP_API_HOST_URL+'/user/'+id)
            .then((response)=>{
                setUserInfo(response.data.data);
            })
            .catch(err => err);
    },[]);
    
    return (
        <div>
            <h2>My Profile</h2>
            <div>
            <form>
                <div className="form-group row">
                    <label htmlFor="firsName " className="col-sm-2 col-form-label">First Name</label>
                    <div className="col-sm-10" >
                        <input type="text"  readonly className="form-control" value={userInfo.firstName} />   
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="lastName" className="col-sm-2 col-form-label" >Last Name</label>
                    <div className="col-sm-10">
                        <input type="text" readonly className="form-control" value={userInfo.lastName}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="phoneNumber" className="col-sm-2 col-form-label" >Phone Number</label>
                    <div className="col-sm-10">
                        <input type="text" readonly className="form-control" value={userInfo.phone} />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="email " className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" readonly className="form-control" value={userInfo.email} />
                    </div>
                </div>
           </form>
           </div>
        </div>
    );
}