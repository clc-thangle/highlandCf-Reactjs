import React, { Component, Fragment } from 'react';
import Menu from "./../Menu/Menu";
import Content from "./../Content/Content";
import '../Menu/Menu.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from '../Product/Product';
import Category from '../Category/Category';
import ProductDetails from '../ProductDetails/ProductDetails';
class DieuHuongURL extends Component {
    render() {
        return (
                <div>
                <Route exact path="/menu" component={Menu}/>
                <Route exact path="/" component={Content}/>
                <Route exact path="/product" component={Product}/>
                <Route exact path="/category" component={Category}/>
                <Route exact path="/product-details" component={ProductDetails}/>
                </div>
        );
    }
}

export default DieuHuongURL;