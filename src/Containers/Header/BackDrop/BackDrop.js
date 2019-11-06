import React, { Component } from 'react'
import { BackDropDiv } from './BackDrop.styled'

// this div has height 100%, so it is not vosible but it is there in hole page
class BackDrop extends Component {
    constructor(props){
        super(props)
        console.log("backDrower Constuctor");
    }

    render(){
        return(
            <BackDropDiv onClick={this.props.click}></BackDropDiv>
   
        )
    }
} 
export default BackDrop