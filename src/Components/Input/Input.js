import React, { Component } from 'react';
import {StyleInput} from './Input.styled'

class Input extends Component {
    render(){
        const { placeholder, type } = this.props;
        return(
            <StyleInput type={ type } placeholder={ placeholder }></StyleInput>  
        )
    }
}

export default Input