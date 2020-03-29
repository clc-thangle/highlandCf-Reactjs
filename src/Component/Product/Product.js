import React, { Component } from 'react';
import "./Product.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Product extends Component {
    render() {
        return (
            <div>
                <div className="content-pro">
                    <div className="content-title" style={{ marginLeft: '170px' }}>
                        <h2>CÀ PHÊ ESPRESSO</h2>
                    </div>
                    <p style={{ margin: '40px 0 50px 174px', width: '54%', fontSize: '17px' }}>Hãy quên đi những bộn bề cuộc sống để tìm thấy những niềm vui nho nhỏ từ ly Cà phê Espresso của Highlands Coffee. Bí quyết để cho ra hương vị đậm đà, tinh tế của một tách cà phê Espresso là phương pháp phối trộn độc đáo, công phu giữa hai loại cà phê Arabica và Robusta thượng hạng, và đặc biệt là không thể thiếu được kĩ năng pha chế điêu luyện từ các Barista của chúng tôi.</p>
                    <div className="content-cate">
                        <div className="main">
                            <div className="main-content">
                                <div className="row">
                                    <div className="col-md-4 rowpadding">
                                        <Link to="/product-details" className="menu-img"><img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_LATTE.png" width="188px" height="188px" />
                                        </Link>
                                        <div className="tend">
                                            <h3><a>CÀ PHÊ</a></h3>
                                            <h3>Giá: 15.000Đ</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-4 rowpadding">
                                        <Link to="/product-details" className="menu-img"><img src="https://www.highlandscoffee.com.vn/vnt_upload/product/05_2018/thumbs/270_crop_MOCHA.png" width="188px" height="188px" />
                                        </Link>
                                        <div className="tend">
                                            <h3><a>TRÀ</a></h3>
                                            <h3>Giá: 15.000Đ</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-4 rowpadding">
                                        <Link to="/product-details" className="menu-img"><img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_AMERICANO.png" width="188px" height="188px" />
                                        </Link>
                                        <div className="tend">
                                            <h3><a>BÁNH</a></h3>
                                            <h3>Giá: 15.000Đ</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="content-title" style={{ marginLeft: '170px' }}>
                        <h2>Cà Phê Phin</h2>
                    </div>
                    <p style={{ margin: '40px 0 50px 174px', width: '54%', fontSize: '17px' }}>Việt Nam tự hào sở hữu một di sản văn hóa cà phê giàu có, và 'Phin' chính là linh hồn, là nét văn hóa thưởng thức cà phê đã ăn sâu vào tiềm thức biết bao người Việt. Cà phê rang xay được chiết xuất chậm rãi từng giọt một thông qua dụng cụ lọc bằng kim loại có tên là 'Phin', cũng giống như thể hiện sự sâu sắc trong từng suy nghĩ và chân thành trong những mối quan hệ hiện hữu. Bạn có thể tùy thích lựa chọn uống nóng hoặc dùng chung với đá, có hoặc không có sữa...</p>
                    <div className="content-cate">
                        <div className="main">
                            <div className="main-content">
                                <div className="row">
                                    <div className="col-md-4 rowpadding">
                                        <Link to="/product-details" className="menu-img"><img src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_AMERICANO.png" width="188px" height="188px" />
                                        </Link>
                                        <div className="tend">
                                            <h3><a>PHIN ĐEN NÓNG</a></h3>
                                            <h3>Giá: 15.000Đ</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-4 rowpadding">
                                        <Link to="/product-details" className="menu-img"><img src="https://www.highlandscoffee.com.vn/vnt_upload/product/05_2018/thumbs/270_crop_CFD.png" width="188px" height="188px" />
                                        </Link>
                                        <div className="tend">
                                            <h3><a>PHIM ĐEN ĐÁ</a></h3>
                                            <h3>Giá: 15.000Đ</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-4 rowpadding">
                                        <Link to="/product-details" className="menu-img"><img src="https://www.highlandscoffee.com.vn/vnt_upload/product/06_2018/thumbs/270_crop_PHIN-SUA-NONG.png" width="188px" height="188px" />
                                        </Link>
                                        <div className="tend">
                                            <h3><a>PHIN SỮA NÓNG</a></h3>
                                            <h3>Giá: 15.000Đ</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Product;