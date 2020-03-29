import React, { Component } from 'react';
import "./AboutUs.css";
class AboutUs extends Component {
    render() {
        return (
            <div className="content-about">
                <div className="about1">
                    <div className="img-about1 div-img-1">
                        <img src="https://www.highlandscoffee.com.vn/vnt_upload/about/ABOUT-ORIGIN.png" width="760px" height="420px" />
                        <div className="background1-about" />
                    </div>
                    <div className="cap-about1">
                        <div className="cap-about">
                            <div className="tend-about" style={{ marginBottom: '13px' }}><a>KHỞI NGUỒN</a></div>
                            <div className="des-about">
                                <p style={{ marginBottom: '15px' }}><strong>Thương hiệu bắt nguồn từ cà phê Việt Nam</strong></p>
                                <p style={{ marginBottom: '20px' }}>Highlands Coffee® được sinh ra từ niềm đam mê bất tận với hạt cà phê Việt Nam. Qua một chặng đường dài, chúng tôi đã không ngừng mang đến những sản phẩm cà phê thơm ngon, sánh đượm trong không gian thoải mái và lịch sự với mức giá hợp lý. Những ly cà phê của chúng tôi không chỉ đơn thuần là thức uống quen thuộc mà còn mang trên mình một sứ mệnh văn hóa phản ánh một phần nếp sống hiện đại của người Việt Nam.</p>
                            </div>
                            <div className="link-about">
                                <a className="btn-1-about"><span>XEM CHI TIẾT</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about2">
                    <div className="img-about1 div-img-2">
                        <img src="https://www.highlandscoffee.com.vn/vnt_upload/about/About_Customer_service_2.jpg" width="760px" height="420px" />
                        <div className="background2-about" />
                    </div>
                    <div className="cap-about2">
                        <div className="cap2-about">
                            <div className="tend2-about" style={{ marginBottom: '13px' }}><a>DỊCH VỤ KHÁCH HÀNG</a></div>
                            <div className="des2-about">
                                <p style={{ marginBottom: '15px' }}><strong>Chào mừng bạn đến với Highlands Coffee®</strong></p>
                                <p style={{ marginBottom: '20px' }}>Chúng tôi mong muốn mang đến cho bạn những trải nghiệm đáng nhớ mỗi lần đến Highlands Coffee®. Hãy chia sẻ với chúng tôi để chúng tôi có thể mang đến cho bạn những trải nghiệm tuyệt vời hơn thế.</p>
                            </div>
                            <div className="link2-about">
                                <a className="btn-2-about"><span>XEM CHI TIẾT</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about3">
                    <div className="img-about1 div-img-1">
                        <img src="https://www.highlandscoffee.com.vn/vnt_upload/about/ABOUT-CAREER3.jpg" width="760px" height="420px" />
                        <div className="background3-about" />
                    </div>
                    <div className="cap-about1">
                        <div className="cap-about">
                            <div className="tend3-about" style={{ marginBottom: '13px' }}><a>NGHỀ NGHIỆP</a></div>
                            <div className="des3-about">
                                <p style={{ marginBottom: '15px' }}><strong>Hãy khởi đầu sự nghiệp cùng với Highlands Coffee®</strong></p>
                                <p style={{ marginBottom: '20px' }}>Với sứ mệnh trở thành thương hiệu cà phê Việt Nam dẫn đầu, Highlands Coffee® luôn tìm kiếm những ứng cử viên tiềm năng có chung niềm đam mê và nỗ lực cùng chúng tôi vươn tới thành công. Chúng tôi luôn chào đón các bạn gia nhập vào đội ngũ chuyên nghiệp của gia đình Highlands Coffee®.</p>
                            </div>
                            <div className="link2-about">
                                <a className="btn-1-about"><span>XEM CHI TIẾT</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default AboutUs;