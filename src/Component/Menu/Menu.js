import React, { Component } from 'react';
import './Menu.css'
class Menu extends Component {
    render() {
        return (
            <div>
            <div className="menu-content">
                <div className="image1">
                    <div className="caption">
                        <div className="tend">
                            <h3><a style={{ fontSize: '45px', color: '#faebd7' }}>CÀ PHÊ</a></h3>
                        </div>
                        <div className="des">
                            <span style={{ color: '#faebd7' }}>Sự kết hợp hoàn hảo giữa hạt cà phê Robusta &amp; Arabica thượng hạng được trồng trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí quyết rang xay độc đáo, Highlands Coffee chúng tôi tự hào giới thiệu những dòng sản phẩm Cà phê mang hương vị đậm đà và tinh tế.</span>
                        </div>
                        <div className="link">
                            <a className="khampha" style={{ color: '#faebd7' }}>KHÁM PHÁ THÊM</a>
                        </div>
                    </div>
                    <img className="tend-img" src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-PSD_3.png" />
                </div>
                <div className="image2">
                    <div className="caption2">
                        <div className="tend2">
                            <h3><a style={{ fontSize: '45px', color: '#006400' }}>FREEZE</a></h3>
                        </div>
                        <div className="des2">
                            <span style={{ color: '#006400' }}>Sảng khoái với thức uống đá xay phong cách Việt. Freeze là thức uống đá xay mát lạnh được pha chế từ những nguyên liệu thuần túy của Việt Nam.</span>
                        </div>
                        <div className="link">
                            <a className="khampha" style={{ color: '#006400' }}>KHÁM PHÁ THÊM</a>
                        </div>
                    </div>
                    <img className="tend-img2" src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-FREEZE_1.png" />
                </div>
                <div className="image3">
                    <div className="caption3">
                        <div className="tend3">
                            <h3><a style={{ fontSize: '45px', color: 'white' }}>TRÀ</a></h3>
                        </div>
                        <div className="des3">
                            <span style={{ color: 'white' }}>Hương vị tự nhiên, thơm ngon của Trà Việt với phong cách hiện đại tại Highlands Coffee sẽ giúp bạn gợi mở vị giác của bản thân và tận hưởng một cảm giác thật khoan khoái, tươi mới.</span>
                        </div>
                        <div className="link3">
                            <a className="khampha" style={{ color: 'white' }}>KHÁM PHÁ THÊM</a>
                        </div>
                    </div>
                    <img className="tend-img3" src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-TEA_1.png" />
                </div>
                <div className="image4">
                    
                    <div className="caption4">
                        <div className="tend2" data-eff="fadeInUp">
                            <h3><a style={{ fontSize: '45px', color: '#ffffe0' }}>BÁNH MÌ</a></h3>
                        </div>
                        <div className="des4" data-eff="fadeInUp">
                            <span style={{ color: '#ffffe0' }}>Bạn đã quá quen thuộc với Bánh mì Việt Nam. Hãy nếm thử một miếng Bánh mì ngon, giòn, nóng hổi tại Highlands Coffee. Một kết hợp hoàn hảo giữa lớp nhân chua, cay, mặn, ngọt quyện với lớp vỏ bánh mì giòn tan, mịn màng tạo ra tầng tầng lớp lớp dư vị cho thực khách. </span>
                        </div>
                        <div className="link" data-eff="fadeInUp">
                            <a className="khampha" style={{ color: '#ffffe0' }}>KHÁM PHÁ THÊM</a>
                        </div>
                    </div>
                    <img className="tend-img4" src="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/banh-mi-thit-nuong-vn.png" width="585px" height="333.45px" />
                </div>
            </div>
            </div>
        );
    }
}

export default Menu;