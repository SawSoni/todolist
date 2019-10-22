import React, { Component } from 'react'
import {StyledWrapper} from './Wrapper.style'

class Wrapper extends Component {
    render(){
        return(
            <StyledWrapper width={this.props.width} margin={this.props.margin}>
                {this.props.children}   
            </StyledWrapper>
        )
    }
}

export default Wrapper