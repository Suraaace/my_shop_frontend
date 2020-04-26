import React, { useState, useEffect } from "react";
import axios from "axios";
import {ProductCard} from "./ProductCard";
import {GlobalStore} from "global-store-hook";

export const ProductDetail = props => {
    const itemId = props.match.params.itemId;
    // const [stop, setStop] = useState("");
    const [product, setProduct] = useState({});
    const [products, setProducts] = useState([]);
    const [addToCart, setAddToCart] = useState("Add To Cart");
    const [isDisabled, setIsDisabled] = useState(false);

    const store = GlobalStore();

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_HOST_URL+'/product/'+itemId)
            .then((response) => {
                setProduct(response.data.data);
            })
            .catch(err => err);

        axios.get(process.env.REACT_APP_API_HOST_URL+'/product/')
            .then((response) => {
                setProducts(response.data.data);
            })
            .catch(err => err);
    }, []);

    const handleCart = () => {
        setAddToCart('Added To Cart');
        setIsDisabled(true);
        const previousItems = store.get('cart');
        const cartItems = [...previousItems, product];
        store.set('cart', cartItems);
        localStorage.setItem('cart', JSON.stringify(cartItems));
    };

    return (
        <div style={{marginTop: 10}}>
            {/*<div>Name: {product.name} </div>*/}
            {/*<div>Description: {product.description}</div>*/}
            {/*<div>Price: {product.price}</div>*/}
            <div className={'row'}>
                <div className={'col-5'}>
                    <div>
                        <img src={'https://dummyimage.com/600'} className="img-fluid"/>
                    </div>
                    <div className={'row'}>
                        <div className={'col-2'}><img src={'https://dummyimage.com/600'} className="img-thumbnail"/></div>
                        <div className={'col-2'}><img src={'https://dummyimage.com/600'} className="img-thumbnail"/></div>
                        <div className={'col-2'}><img src={'https://dummyimage.com/600'} className="img-thumbnail"/></div>
                        <div className={'col-2'}><img src={'https://dummyimage.com/600'} className="img-thumbnail"/></div>
                        <div className={'col-2'}><img src={'https://dummyimage.com/600'} className="img-thumbnail"/></div>
                        <div className={'col-2'}><img src={'https://dummyimage.com/600'} className="img-thumbnail"/></div>
                    </div>
                </div>
                <div className={'col-7'}>
                    <h2>{product.name}</h2>
                    <p>Magnetic Wireless bluetooth Earphone XT11 music headset Phone Neckband sport Earbuds Earphone with Mic For iPhone Samsung Xiaomi</p>
                    <div>
                    <h4><span className="badge badge-secondary">Price: {product.price}</span></h4>
                    </div>
                    <div>
                        <h4>Quantity</h4>
                        <p>5</p>
                    </div>
                    <div>
                        <h4>Description</h4>
                        <p>{product.description}</p>
                    </div>
                    <div className={'row'}>
                        <div className={'col-4'}>
                            <button
                                type={'button'}
                                onClick={() => handleCart()}
                                disabled={isDisabled}
                                className={'btn btn-primary btn-block'}>{addToCart}</button>
                        </div>
                        <div className={'col-4'}>
                            <button type={'button'} className={'btn btn-danger btn-block'}>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <h2>Related Items</h2>
            <div className={'row'}>
                {
                    products.map((prod, i) => {
                        return (
                            <ProductCard product={prod} key={i}/>
                        )
                    })
                }
            </div>
        </div>
    )
};