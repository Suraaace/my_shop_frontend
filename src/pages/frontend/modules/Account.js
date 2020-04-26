import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {GlobalStore} from "global-store-hook";

export const Account = (props) => {

    const pagetitle = "Your Order Summary";
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
                <table className={'table'}>
                    <tbody>
                    {
                        orders.map((order, i) => {
                            return (
                                <tr key ={i}>
                                    <td>{order.product.name}</td>
                                </tr>                                                  
                            )                         
                        })
                    }                    
                    </tbody>
                </table>
            </div>            
        </div>                     
    )

}