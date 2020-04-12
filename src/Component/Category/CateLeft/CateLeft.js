import React, { Component } from 'react';

class CateLeft extends Component {
    render() {
        return (
            <div className="main-cate">
                <div className="main-content-cate">
                    <div className="main-img-cate">
                        <a><img src={this.props.img} width="770px" height="290px" /></a>
                    </div>
                    <p>{this.props.title}</p>
                    <div className="main-link-cate">
                        <a><span>{this.props.span}</span></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default CateLeft;