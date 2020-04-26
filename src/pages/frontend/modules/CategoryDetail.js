import React, {useState, useEffect} from "react";
import axios from "axios";
import {ProductCard} from "./ProductCard";



export class CategoryDetail extends React.Component {


    
    constructor(props) {
        super(props);

        let name= props.match.params.name;
        // const {match : {params }} = this.props;
      //  let name = params.name;

        console.log(name);


        this.state = {
            pageTitle: 'Category',
            products: [],
            cat: name,
          //  productCount: 0,
        };
    };

    componentDidMount() {
        this.loadProductFromServer();
      //  this.loadCategoryFromServer();
    };

    loadProductFromServer = () => {
        axios.get(process.env.REACT_APP_API_HOST_URL+'/product')
            .then((response) => {

                let totalData = response.data.count;
                this.setState({
                    // productCount: totalData,
                    products: response.data.data

                });

            })
            .catch(err => err);
    };

    // loadCategoryFromServer = () => {
    //     axios.get(process.env.REACT_APP_API_HOST_URL+'/category')
    //         .then((response) => {

    //             this.setState({
    //                 topCategories: response.data.data
    //             });

    //         })
    //         .catch(err => err);
    // };

    render() {
        return (
            <div className={'row'}>
                {
                    this.state.products.map((prod, i) => {
                        if(prod.category === this.state.cat ) {
                            return (
                                <ProductCard product={prod} key={i}/>
                            )
                        }
                    })
                }
            </div>
        )
    }

    



}