import React from 'react';

import logo from "../img/logo.svg"

import "./styles/Products.css";

import { dataProducts } from "../json/products.json";

import Buttom from "../components/Buttom";

class Products extends React.Component{
    constructor(){
        super();
        this.state = {
            dataProducts: dataProducts
        }
    }
    render(){
        const products = this.state.dataProducts.map((product) => {
            return (
                <div className="col-3 mb-4" key={product.id}>
                    <div className="card">
                        <img className="Products__img" src={logo} alt="Imagen del producto"/>
                        <div className="card-body">
                            <h3 className="text-center card-title h5">{product.name}</h3>
                            <span className="text-center d-block">{product.price}</span>
                        </div>
                        <div className="d-flex justify-content-center py-3">
                            <Buttom link="/" linkText="View details"/>
                        </div>
                    </div>
                </div>
            )
        })
        return(
            <div className="container py-5">
                <div className="row">
                    {products}
                </div>
            </div>
        );
    }
}
export default Products;