import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
    render(){
        return(
            <div>
                <h1 className='tc f1'>Hello World</h1>
                <p1>{this.props.greeting}</p1>
            </div>
        )
    }
}

export default Hello;