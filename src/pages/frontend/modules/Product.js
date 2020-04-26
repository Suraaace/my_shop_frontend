import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ProductCard} from "./ProductCard";

export const Product = (props) => {
    const [stop,setStop] = useState("");
    const [products,setProducts] = useState([]);

    
    useEffect(()=>{
        axios.get(process.env.REACT_APP_API_HOST_URL+'/product/')
            .then((response) =>{
                setProducts(response.data.data);
            })
            .catch(err => err);
    }, [stop]);

    return (
        <div>
            <div className={'row'} >
                {
                    products.map((product, i) => {
                        return (

                            <ProductCard product={product} key={i}/>
                        )
                    })
                }
            </div>
        </div>
    );
};