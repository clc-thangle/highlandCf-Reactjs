import React, { Component } from 'react';
import "./Category.css"
import CateLeft from './CateLeft/CateLeft';
import CateRight from './CateRight/CateRight';
import MoreCate from './MoreCate/MoreCate';
class Category extends Component {
    render() {
        return (
            <div>
                <div className="content-cate">
                    <div className="content-title-cate">
                        <h2>CÀ PHÊ PHIN</h2>
                    </div>
                    <div className="content-cate">
                        <CateLeft img="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-PSD-inside.jpg"
                        title="Việt Nam tự hào sở hữu một di sản văn hóa cà phê giàu có, và 'Phin' chính là linh hồn, là nét văn hóa thưởng thức cà phê đã ăn sâu vào tiềm thức biết bao người Việt. Cà phê rang xay được chiết xuất chậm rãi từng giọt một thông qua dụng cụ lọc bằng kim loại có tên là 'Phin', cũng giống như thể hiện sự sâu sắc trong từng suy nghĩ và chân thành trong những mối quan hệ hiện hữu. Bạn có thể tùy thích lựa chọn uống nóng hoặc dùng chung với đá, có hoặc không có sữa đặc. Highlands Coffee tự hào phục vụ cà phê Việt theo cách truyền thống của người Việt."
                        span="XEM SẢN PHẨM"></CateLeft>
                        <div className="sidebar-cate">
                            <CateRight img="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_PHIN-SUA-DA.png"
                            nameCateSide="Phin Sữa Đá"
                            title="Hương vị cà phê Việt Nam đích thực! Từng hạt cà phê hảo hạng được chọn bằng tay, phối trộn độc đáo giữa hạt Robusta từ cao nguyên Việt Nam,..."></CateRight>
                            <CateRight img="https://www.highlandscoffee.com.vn/vnt_upload/product/05_2018/thumbs/270_crop_CFD.png"
                            nameCateSide="Phin Đen Đá"
                            title="Dành cho những tín đồ cà phê đích thực! Hương vị cà phê truyền thống được phối trộn độc đáo tại Highlands. Cà phê đậm đà pha hoàn toàn từ Phin,..."></CateRight>
                        </div>
                    </div>
                </div>
                <div className="content-cate">
                    <div className="content-title-cate">
                        <h2>Cà Phê Espresso</h2>
                    </div>
                    <div className="content-cate">
                        <CateLeft img="https://www.highlandscoffee.com.vn/vnt_upload/product/05_2018/menu-ESPRESSO-inside-2VN.jpg"
                        title="Hãy quên đi những bộn bề cuộc sống để tìm thấy những niềm vui nho nhỏ từ ly Cà phê Espresso của Highlands Coffee. Bí quyết để cho ra hương vị đậm đà, tinh tế của một tách cà phê Espresso là phương pháp phối trộn độc đáo, công phu giữa hai loại cà phê Arabica và Robusta thượng hạng, và đặc biệt là không thể thiếu được kĩ năng pha chế điêu luyện từ các Barista của chúng tôi."
                        span="XEM SẢN PHẨM"></CateLeft>
                        <div className="sidebar-cate">
                            <CateRight img="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_LATTE.png"
                            nameCateSide="Latte"
                            title="Ly cà phê sữa ngọt ngào đến khó quên! Với một chút nhẹ nhàng hơn so với Cappuccino, Latte của chúng tôi bắt đầu với cà phê espresso, sau đó thêm sữa tươi và..."></CateRight>
                            <CateRight img="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_CAPPUCINO.png"
                            nameCateSide="Latte"
                            title="Ly cà phê sữa đậm đà thời thượng! Một chút đậm đà hơn so với Latte, Cappuccino của chúng tôi bắt đầu với cà phê espresso, sau đó thêm một lượng tương đương giữa..."></CateRight>
                        </div>
                    </div>
                </div>
                <div className="new-content-cate">
                    <div className="content-title-cate"><h2>KHÁC</h2></div>
                    <div className="row-cate">
                        <MoreCate img="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-PSD_3.png"
                        nameMore="CÀ PHÊ"
                        title="Sự kết hợp hoàn hảo giữa hạt cà phê Robusta; Arabica thượng hạng được trồng trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí quyết rang..."></MoreCate>
                        <MoreCate img="https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/menu-TEA_1.png"
                        nameMore="TRÀ"
                        title="Hương vị tự nhiên, thơm ngon của Trà Việt với phong cách hiện đại tại Highlands Coffee sẽ giúp bạn gợi mở vị giác của bản thân và tận hưởng một cảm..."></MoreCate>
                        <MoreCate img="https://www.highlandscoffee.com.vn/vnt_upload/product/06_2018/menu-OTHERS-3.jpg"
                        nameMore="BÁNH"
                        title="Sẽ càng ngon miệng hơn khi bạn kết hợp đồ uống với những chiếc bánh ngọt thơm ngon được làm thủ công hàng ngày ngay tại bếp bánh của Highlands..."></MoreCate>
                    </div>
                </div>
            </div>

        );
    }
}

export default Category;