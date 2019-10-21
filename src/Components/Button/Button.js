import React, { Component } from 'react';
import { StyledButton} from './Button.style';

class Button extends  Component {
    render(){
        const { text, onclick, color,width } = this.props
        return(
            <React.Fragment>
                    <StyledButton width={width} buttonText={text} color={color} onClick={ onclick }>{ text }</StyledButton>
            </React.Fragment>
        )
    }
}

export default Button