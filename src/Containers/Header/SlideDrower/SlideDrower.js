import React, { Component } from 'react'
import './SlideDrower.css'

class SideDrower extends Component {


    render(){
        let drowerClasses =  'side-drower'
        if(this.props.show){
            drowerClasses = 'side-drower open'
        }
        return(
            <nav className={drowerClasses}>
            <ul>
                <li>Product</li>
                <li>Users</li>
            </ul>
        </nav>
        )
    }
}



export default SideDrower