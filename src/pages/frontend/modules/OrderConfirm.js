import React, {useEffect, useState} from 'react';
import {GlobalStore} from "global-store-hook";
import history from "../../../helper/history";

export const OrderConfirm = (props) =>{
    const store = GlobalStore();
    const cartItems = store.get('cart');
    const user = store.get('user');


    const placeOrder = () => {
        
    }

    return(
        <div>  
           <div>
            {/* {cartItems.length === 0 &&
            <div>
                Oops! your cart is empty
            </div>}

            { totalPrice > 0 &&
            <div>
                <h2>Total Price: $ {totalPrice}</h2>
            </div>} */}
            <div>
                <h2>List of Items</h2>
                <table className={'table'}>
                    <tbody>
                    {
                        cartItems.map((item, i) => {
                            return(
                                <tr key={i}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    {/* <td>
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick = {() => handleRemove(item._id)} > Remove </button>
                                    </td> */}
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                <h2>Pay With Credit Card</h2>
                <hr/>
                <div className='form-group'>
                    <div >
                        <label htmlFor='name'>Name</label>
                        <input className='form-control' type='text' placeholder='Name on Card' />
                    </div>
                    <div >
                        <label  className='col-sm-' htmlFor='creditCardNumber'>Credit Card Number</label>
                        <input className="form-control" type='text' placeholder='Credit Card Number' />
                    </div>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <label htmlFor='expiryDate'>Valid Untill</label>
                            <input className="form-control" type='text' placeholder='Valid Untill' />
                        </div>
                        <div className='col-sm-6'>
                            <label htmlFor='cvvPin'>CVV</label>
                            <input className="form-control" type='text' placeholder='CVV'/>
                        </div>
                    </div>
                </div>
               <hr/>

                <button type={'button'} className={'btn btn-primary'} onClick = {() => placeOrder()}>Pay </button>

                {/* <button type={'button'} className={'btn btn-primary'} onClick={() => history.push('/orderconfirm')}>{placeOrderText}</button> */}
            </div>
        </div>
        </div>
    )
}