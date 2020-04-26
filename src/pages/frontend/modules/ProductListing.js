import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ProductCard} from "./ProductCard";

export const ProductListing = (props) => {

    const [isLoadingProduct, setIsLoadingProduct] = useState(true);
    const [isLoadingCategory, setIsLoadingCategory] = useState(true);
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState({});
    const [productName, setProductName] = useState("");
    const itemId = props.match.params.itemId;

    useEffect(() => {

        axios.get(process.env.REACT_APP_API_HOST_URL+'/product?category='+itemId+'&name='+productName)
            .then((response) => {
                setIsLoadingProduct(false);
                setProducts(response.data.data);
            })
            .catch(err => err);

        axios.get(process.env.REACT_APP_API_HOST_URL+'/category/'+itemId)
            .then((response) => {
                setIsLoadingCategory(false);
                setCategory(response.data.data);
            })
            .catch(err => err);

    }, [isLoadingProduct, isLoadingCategory]);

    const searchItem = e => {
        let text = e.target.value;
        setProductName(text);
        setIsLoadingProduct(true);
    };

    return (
        <div>
            <h2>Products In ({ category.name})</h2>
            <div>
                <input
                    type={'text'}
                    onChange={searchItem}
                    className={'form-control'}
                    placeholder={'Search Product'}/>
            </div>
            <div className={'row'}>
                {
                    products.map((prod, i) => {
                        return (
                            <ProductCard product={prod} key={i}/>
                        )
                    })
                }
            </div>
            <div>{ products.length === 0 && <div> No Items found</div>}</div>
        </div>
    );
};