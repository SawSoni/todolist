import React, { Component } from 'react';
import { StyleInput } from './Input.style'

class Input extends Component {
    render(){
        const { type, placeholder, onchange} = this.props
        return(
            <React.Fragment>
                <StyleInput type={type} placeholder={ placeholder }  onChange={onchange}></StyleInput>
            </React.Fragment>
        )
    }
}

export default Input