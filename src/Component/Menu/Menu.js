import React, { Component } from 'react';
import './Menu.css'
import dl from './../../menu.json'
import MenuItem from './MenuItem';
class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            catePro : [
                {
                  cate_id : 'ca_phe',
                  cate_name: 'Cà phê',
                  products : []
                },
                {
                  cate_id : 'tra',
                  cate_name : 'Trà',
                  products : []
                },
                {
                  cate_id : 'thuc_uong_da_xay',
                  cate_name : 'Thức uống đá xay',
        
                  products : []
                },
                {
                  cate_id : 'thuc_uong_trai_cay',
                  cate_name : 'Thức uống trái cây',
                  products : []
                },
                {
                  cate_id : 'banh_snack',
                  cate_name : 'Bánh snack',
                  products : []
                },
                {
                  cate_id : 'mon_noi_bat',
                  cate_name : 'Món nổi bật',
                  products : []
                }
              ]
        }
    }

    componentDidMount() {
        this.setState({
            data: dl.data
        });
        var proCates = this.state.catePro;
        this.state.catePro.map((value,key) => {
            let products = [];
            dl.data.map((val,key) => {
                if(val.product_category_id === value.categ_id)
                {
                    products.push(val);
                }
            })
            console.log(products);
            proCates[key].products= products;
            
        })
        console.log("aaaa");    
    }

    render() {

        console.log(dl);

        return (
            <div>
            <div className="menu-content">
                <MenuItem
                ctClassImg = 'image1'
                ctClass = 'caption'
                ctClassTend = 'tend-img'
                title = 'CÀ PHÊ'
                des ='des'
                content = 'Sự kết hợp hoàn hảo giữa hạt cà phê Robusta; Arabica thượng hạng được trồng trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí quyết rang xay độc đáo, Highlands Coffee chúng tôi tự hào giới thiệu những dòng sản phẩm Cà phê mang hương vị đậm đà và tinh tế.'
                anh = 'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-PSD_3.png'
                color = '#faebd7'
                namButton = 'KHÁM PHÁ THÊM'
                />
                <MenuItem
                ctClassImg = 'image2'
                ctClass = 'caption2'
                ctClassTend = 'tend-img2'
                title = 'FREEZE'
                des ='des2'
                content = 'Sảng khoái với thức uống đá xay phong cách Việt. Freeze là thức uống đá xay mát lạnh được pha chế từ những nguyên liệu thuần túy của Việt Nam.'
                anh = 'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-FREEZE_1.png'
                color = '#006400'
                namButton = 'KHÁM PHÁ THÊM'
                />
                <MenuItem
                ctClassImg = 'image3'
                ctClass = 'caption3'
                ctClassTend = 'tend-img3'
                title = 'TRÀ'
                des ='des3'
                content = 'Hương vị tự nhiên, thơm ngon của Trà Việt với phong cách hiện đại tại Highlands Coffee sẽ giúp bạn gợi mở vị giác của bản thân và tận hưởng một cảm giác thật khoan khoái, tươi mới.'
                anh = 'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-TEA_1.png'
                color = 'white'
                namButton = 'KHÁM PHÁ THÊM'
                />
                <MenuItem
                ctClassImg = 'image4'
                ctClass = 'caption4'
                ctClassTend = 'tend-img4'
                title = 'BÁNH MÌ'
                des ='des4'
                content = 'Bạn đã quá quen thuộc với Bánh mì Việt Nam. Hãy nếm thử một miếng Bánh mì ngon, giòn, nóng hổi tại Highlands Coffee. Một kết hợp hoàn hảo giữa lớp nhân chua, cay, mặn, ngọt quyện với lớp vỏ bánh mì giòn tan, mịn màng tạo ra tầng tầng lớp lớp dư vị cho thực khách. '
                anh = 'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/banh-mi-thit-nuong-vn.png'
                color = 'white'
                namButton = 'KHÁM PHÁ THÊM'
                />
            </div>
            </div>
        );
    }
}

export default Menu;