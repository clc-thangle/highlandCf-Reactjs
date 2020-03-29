import React, { Component } from 'react';
import "./Responsibility.css";
class Responsibility extends Component {
    render() {
        return (
            <div className="new-content-res">
                <div className="new-title"><h2>TRÁCH NHIỆM CỘNG ĐỒNG</h2></div>
                <div className="row-res">
                    <div className="col-md-4">
                        <a><img src="https://www.highlandscoffee.com.vn/vnt_upload/news/09_2019/thumbs/470_crop_Picture1.png" width="370px" height="247px" />
                        </a>
                        <div className="tend-res">
                            <h3><a>HIGHLANDS COFFEE CÙNG Ý TƯỞNG “LỒNG ĐÈN XANH” THẮP SÁNG "TRUNG THU XANH” CHO HƠN 700 EM NHỎ</a></h3>
                        </div>
                        <div className="date-res">
                            <i className="fa fa-calendar-o" aria-hidden="true" />
                            <span style={{ marginLeft: '10px' }}>03/06/2020</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <a><img src="https://www.highlandscoffee.com.vn/vnt_upload/news/03_2018/thumbs/470_crop_KV_Highlands_CSR_1.jpg" width="370px" height="247px" />
                        </a>
                        <div className="tend-res">
                            <h3><a>ĐƯƠNG ĐẠI HÓA TRANH ĐÔNG HỒ!</a></h3>
                        </div>
                        <div className="date-res" style={{ marginTop: '9%' }}>
                            <i className="fa fa-calendar-o" aria-hidden="true" />
                            <span style={{ marginLeft: '10px' }}>03/06/2020</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <a><img src="https://www.highlandscoffee.com.vn/vnt_upload/news/05_2018/thumbs/470_crop_IMG_0479.jpg" width="370px" height="247px" />
                        </a>
                        <div className="tend-res">
                            <h3><a>TRUNG THU YÊU THƯƠNG - LỚP HỌC CHO EM 2017</a></h3>
                        </div>
                        <div className="date-res" style={{ marginTop: '9%' }}>
                            <i className="fa fa-calendar-o" aria-hidden="true" />
                            <span style={{ marginLeft: '10px' }}>03/06/2020</span>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Responsibility;