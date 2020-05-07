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
    
      componentDidMount () {
        this.setState({
          data: info.data
        }); 
        var proCates = this.state.catePro;
        // console.log(proCates);
        
        this.state.catePro.map((value,key) => {
          let products = [];  // ni để lấy ra cái list products mà có cate= ...
          info.data.map ( (val,key) => {
            if(val.product_category_id === value.cate_id){
              products.push(val);
            }
    
          })
          // console.log(products);
          // yến cái dòng chỗ ni để làm j á
          proCates[key].products= products; // ni để push cái list product vô cái mảng chứa đối tượng của cate á 
          
        })
        this.setState({
          catePro: proCates
        });
        console.log(this.state.catePro);
      }

    render() {
      
        return (
            <div>
                <div className="menu-content">
                    {this.state.catePro.map((value,key) => {
                        if(key%2==0)
                        {
                        return(
                            <MenuItem 
                            key={key}
                            id={value.cate_id}
                            anh={value.products[0] ? value.products[0].image : null}
                            ctClassImg='image1'
                            content= {value.products[0] ? value.products[0].description : null}
                            title={value.cate_name}
                            namButton='KHÁM PHÁ THÊM'
                            color='white'
                            ctClassTend='tend-img'
                            ctClass='caption'
                            />
                        )}
                        else {
                          return(
                            <MenuItem 
                            key={key}
                            id={value.cate_id}
                            anh={value.products[0] ? value.products[0].image : null}
                            ctClassImg='image2'
                            content= {value.products[0] ? value.products[0].description : null}
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