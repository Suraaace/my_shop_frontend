import React from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {ProductCard} from "./ProductCard";
import {CategoryCard} from "./CategoryCard";

export default class Home extends React.Component { // exporting and defing at the same time

    constructor(props) {
        super(props);
        this.state = {
            pageTitle: 'ProductS',
            products: [],
            topCategories: [],
            productCount: 0,
        };
    };

    componentDidMount() {
        this.loadProductFromServer();
        this.loadCategoryFromServer();
    };

    loadProductFromServer = () => {
        axios.get(process.env.REACT_APP_API_HOST_URL+'/product')
            .then((response) => {

                let totalData = response.data.count;
                this.setState({
                    productCount: totalData,
                    products: response.data.data

                });

            })
            .catch(err => err);
    };

    loadCategoryFromServer = () => {
        axios.get(process.env.REACT_APP_API_HOST_URL+'/category')
            .then((response) => {

                this.setState({
                    topCategories: response.data.data
                });

            })
            .catch(err => err);
    };

    render() {
        return (
            <div>
                <h2>Top Category</h2>
                <div className={'row'}>
                    {
                        this.state.topCategories.map((cat, i) => {
                            return (
                                <CategoryCard category={cat} key={i}/>
                            )
                        })
                    }
                </div>
                <hr/>
                <h2>Featured Item</h2>
                <div className={'row'}>
                    {
                        this.state.products.map((prod, i) => {
                            if(prod.isFeatured === 1) {
                                return (
                                    <ProductCard product={prod} key={i}/>
                                )
                            }
                        })
                    }
                </div>
                <h2>Popular Item</h2>
                <div className={'row'}>
                    {
                        this.state.products.map((prod, i) => {
                            if(prod.isPopular === 1) {
                                return (
                                    <ProductCard product={prod} key={i}/>
                                )
                            }
                        })
                    }
                </div>
            </div>
        );
    };
};