import React, { Component } from 'react';
// import './Card.css';
import { StyledCard } from './Card.style'



class Card extends Component {
 
    render(){
        const { handleClick, width, height} = this.props;
        let style = {
            width: width,
            height: height,
        }

        return(
        <StyledCard style={style} className="cardParent">
                {this.props.children}   
        </StyledCard> 
        )
    }
}

export default Card