import React, { useState } from "react";
import {Link} from "react-router-dom";
import { GlobalStore } from "global-store-hook";

export const ProductCard = props => {
    const product = props.product;
    const [addToCart, setAddToCart] = useState("Add To Cart");
    const [isDisabled, setIsDisabled] = useState(false);

    const store = GlobalStore();


    const handleCart =() => {
        setAddToCart('Added To Cart');
        setIsDisabled(true);
        const previousItems = store.get('cart')
        const cartItems = [...previousItems, product];
        store.set('cart', cartItems);
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }

    return (
        <div className={'col-3'}>
            <div className="card" >
                <img className="card-img-top" src="https://dummyimage.com/300.png/09f/fff" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title"><Link to={'/product/details/'+product._id}>{product.name}</Link></h5>
                    <p className="card-text">{product.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{product.price}</li>
                    <li className="list-group-item">{product.category ? product.category.name : ''}</li>
                    <li className="list-group-item">
                        <button type={'button'} className={'btn btn-primary btn-block'}
                        onClick={() => handleCart()}
                        disabled={isDisabled}>{addToCart}</button></li>
                </ul>
            </div>
        </div>
    );
};