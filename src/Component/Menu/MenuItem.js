import React, { Component } from 'react';
import db from './../../menu.json';
class MenuItem extends Component {

    constructor(props) {
        super(props);
        this.setState = {
            arrayCate: []
        }
    }


    render() {
        return (
                <div className={this.props.ctClassImg}>
                <div className={this.props.ctClass}>
                    <div className="tend">
                        <h3><a style={{color :this.props.color}}>{this.props.title}</a></h3>
                    </div>
                    <div className={this.props.des}>
                        <span style={{color :this.props.color}}>{this.props.content}</span>
                    </div>
                    <div className="link">
                        <a className="khampha" style={{color :this.props.color}}>{this.props.namButton}</a>
                    </div>
                </div>
                <img className={this.props.ctClassTend} src={this.props.anh} />
                </div>
        );
    }
}

export default MenuItem;