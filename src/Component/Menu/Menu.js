import React, { Component } from 'react';
import './Menu.css';
import info from './../../menu.json';
import MenuItem from './MenuItem';
import { db } from '../../firebaseConnect';
class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            catePro: [
                {
                    cate_id: 'ca_phe',
                    cate_name: 'Cà phê',
                    products: []
                },
                {
                    cate_id: 'tra',
                    cate_name: 'Trà',
                    products: []
                },
                {
                    cate_id: 'thuc_uong_da_xay',
                    cate_name: 'Thức uống đá xay',
                    products: []
                },
                {
                    cate_id: 'thuc_uong_trai_cay',
                    cate_name: 'Thức uống trái cây',
                    products: []
                },
                {
                    cate_id: 'banh_snack',
                    cate_name: 'Bánh snack',
                    products: []
                },
                {
                    cate_id: 'mon_noi_bat',
                    cate_name: 'Món nổi bật',
                    products: []
                }
            ],
            arrayProduct: []
        }
    }

    componentDidMount() {
        this.setState({
            data: info.data
        });
        var proCates = this.state.catePro;
        // console.log(proCates);

        this.state.catePro.map((value, key) => {
            let products = [];  // \lấy ra cái list products mà có cate= ...
            info.data.map((val, key) => {
                if (val.product_category_id === value.cate_id) {
                    products.push(val);
                }

            })
            // console.log(products);
            
            proCates[key].products = products; // \push cái list product vô cái mảng chứa đối tượng của cate\

        })
        this.setState({
            catePro: proCates
        });
        console.log(this.state.catePro);

        // var array = [];
        // db.collection("data").get().then((querysnapshot) => {
        //     querysnapshot.forEach(function (doc) {
        //         array.push(doc.data())
        //     })
        // });
        // this.setState(
        //     {arrayProduct: array}
        // );
    }

    // getCategoryName = (a) => {
    //     if (a.indexOf("5d71dc67ad2aba2980db0a9d") !== -1) {
    //         //category_name = "Thức ăn nhẹ";
    //         return a = "Mít Sấy";
    //     }
    //     //thức ăn nhẹ : điều vàng, đậu phộng
    //     if (a.indexOf("5d71dc6ead2aba2980db0b04") !== -1) {
    //         // category_name = "Thức ăn nhẹ";
    //         return a = "Thức ăn nhẹ";
    //     }

    //     //cà phê gói: cà phê anrica, cà phê phin
    //     if (a.indexOf("5d71dc6dad2aba2980db0af0") !== -1) {
    //         //category_name = "Cà Phê Gói";
    //         return a = "Cà Phê Gói";
    //     }

    //     //macchiato: trà đen machiato, matcha-macchiato, Trà Xoài Macchiato - Đá, Trà Lài Macchiato - Lạnh, Trà Cherry Macchiato
    //     if (a.indexOf("5d71dc6dad2aba2980db0af2") !== -1) {
    //         //category_name = "Thức Uống Macchiato";
    //         return a = "Thức Uống Macchiato";
    //     }

    //     //đá xay : phuc-bon-tu-cam-da-xay, Cà Phê Đá Xay-Lạnh, Cam Vàng Chanh Đá Xay, Trà Cà Phê Đá Xay - Lạnh, chanh-sa-da-xay
    //     if (a.indexOf("5d71dc71ad2aba2980db0b3e") !== -1) {
    //         //category_name = "Thức Uống Đá Xay";
    //         return a = "Trái Cây Đá Xay";
    //     }
    //     //đá xay : cookie-da-xay, dao-viet-quat-da-xay, chocolate-da-xay, oi-hong-viet-quat-da-xay, matcha-da-xay
    //     if (a.indexOf("5d71dc6fad2aba2980db0b21") !== -1) {
    //         //category_name = "Thức Uống Đá Xay";
    //         return a = "Thức Uống Đá Xay";
    //     }

    //     //sinh tố: sinh-to-cam-xoai, sinh-to-viet-quat
    //     if (a.indexOf("5d71dc6fad2aba2980db0b22") !== -1) {
    //         //category_name = "Sinh tố";
    //         return a = "Sinh tố";
    //     }
    //     //cà phê : ca-phe-den-nong, ca-phe-den-da, ca-phe-sua-nong, bac-xiu-nong, ca-phe-sua-da, Bạc Xỉu
    //     if (a.indexOf("5d71dc6dad2aba2980db0af8") !== -1) {
    //         // category_name = "Cà Phê";
    //         return a = "Cà Phê";
    //     }
    //     //cà phê : cappucino-nong, cappuchino-da, caramel-macchiato-nong, latte-nong, 
    //     //mocha-nong, mocha-da, espresso-da, espresso-nong, caramel-macchiato-da, latte-da, americano-nong, americano-da
    //     if (a.indexOf("5d71dc6fad2aba2980db0b24") !== -1) {
    //         //category_name = "Cà Phê";
    //         return a = "Cà Phê Rang Xay";
    //     }
    //     //socola-da, tra-matcha-latte-nong, tra-matcha-latte-da
    //     if (a.indexOf("5d71dc71ad2aba2980db0b3d") !== -1) {
    //         //category_name = "Choco Matcha";
    //         return a = "Choco Matcha";
    //     }
    //     //ô lông
    //     if (a.indexOf("5d71dc6fad2aba2980db0b27") !== -1) {
    //         // category_name = "Oo Loong";
    //         return a = "Oo Loong";
    //     }
    //     //cold-brew
    //     if (a.indexOf("5d71dc6ead2aba2980db0b0e") !== -1) {
    //         // category_name = "Thức uống Cold Brew";
    //         return a = "Thức uống Cold Brew";
    //     }

    //     if (a.indexOf("5e819b462d2d6a24a216c8d2") !== -1) {
    //         // category_name = "Gói Subscription";
    //         return a = "Gói Subscription 3 ngày";
    //     }

    //     if (a.indexOf("5e819b5548916b75fd17e172") !== -1) {
    //         /// category_name = "Gói Subscription";
    //         return a = "Gói Subscription 5 ngày";
    //     }

    //     if (a.indexOf("5e819b69538a2402ff619802") !== -1) {
    //         //category_name = "Gói Subscription";
    //         return a = "Gói Subscription 7 ngày";
    //     }

    //     //trà trái cây: trà xoài nóng
    //     if (a.indexOf("5d71dc70ad2aba2980db0b35") !== -1) {
    //         //category_name = "Trà Trái Cây";
    //         return a = "Trà Trái Cây";
    //     }
    // }

    // pushData = () => {

    //     this.state.arrayProduct.map(value => {
    //         // db.collection("categories").doc(value.product_category_id).collection("products").doc(value._id).set(value, { merge: true });

    //         db.collection("categories").doc(value.product_category_id).set({
    //             category_name: this.getCategoryName(value.product_category_id),
    //             description: value.description,
    //             image: value.image,
    //             category_id: value.product_category_id,
                
    //         }, { merge: true })
    //     })

    // }

    render() {

        console.log(this.state.arrayProduct);

        // this.pushData()
        
        return (
            <div>
                <div className="menu-content">
                    {this.state.catePro.map((value, key) => {
                        if (key % 2 == 0) {
                            return (
                                <MenuItem
                                    key={key}
                                    id={value.cate_id}
                                    anh={value.products[0] ? value.products[0].image : null}
                                    ctClassImg='image1'
                                    content={value.products[0] ? value.products[0].description : null}
                                    title={value.cate_name}
                                    namButton='KHÁM PHÁ THÊM'
                                    color='white'
                                    ctClassTend='tend-img'
                                    ctClass='caption'
                                />
                            )
                        }
                        else {
                            return (
                                <MenuItem
                                    key={key}
                                    id={value.cate_id}
                                    anh={value.products[0] ? value.products[0].image : null}
                                    ctClassImg='image2'
                                    content={value.products[0] ? value.products[0].description : null}
                                    title={value.cate_name}
                                    namButton='KHÁM PHÁ THÊM'
                                    ctClassTend='tend-img2'
                                    ctClass='caption2'
                                />
                            )
                        }
                    })}
                </div>
            </div>
        );
    }
}

export default Menu;