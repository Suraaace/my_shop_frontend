import React from "react";
import {Link} from "react-router-dom";


export const CategoryCard = (props) => {
    const category = props.category;
    return (
        <div className={'col-3'}>
            <div className="card" >
                <img className="card-img-top" src="https://dummyimage.com/300.png/09f/fff" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title"><Link to={'/category/details/'+category._id}>{category.name}</Link></h5>
                </div>
            </div>
        </div>
    );
};