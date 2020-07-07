import React, { Component } from 'react';
import './shop.css'
import { db } from '../../firebaseConnect';
import CateItem from './CateItem';
import ProductItem from './ProductItem';
class Shop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrayCategory: []
        }
    }

    componentDidMount() {
        var list = [];
        db.collection("data").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    let cate = doc.data();
                    cate.dishes = [];
                    doc.ref.collection('dishes').get()
                        .then((querySnapshot1) => {
                            querySnapshot1.forEach((pro) => {
                                cate.dishes.push(pro.data());
                            })
                            list.push(cate);
                            this.setState({
                                arrayCategory: list
                            })
                        })


                });
            });
    }

    showProCate = (cate) => {
        var listPro = cate.dishes.map((val, key) => 
        <ProductItem 
        name={val.name}
        image={val.photos[2].value}
        prices={val.price.text}
        />
        )
        return listPro;
    }
    render() {
        console.log(this.state.arrayCategory.length);
        return (
            <div>
                <div className="row1 cate">
                    {
                        this.state.arrayCategory.map((value, key) =>
                            <CateItem
                                key={key} id={key}
                                name={value.dish_type_name}
                            />
                        )}
                </div>
                <div className="row1 pro">
                    {
                        this.state.arrayCategory.map((value, key) =>
                            <div key={key} id={key}>
                                {
                                    this.showProCate(value)
                                }
                            </div>
                        )}
                </div>


            </div>
        );
    }
}

export default Shop;