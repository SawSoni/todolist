import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';


class Login extends Component {
    render(){
        return(
            <div>
                This is login page.
                <NavLink to="/about">
                     <a href="#">About</a>
                </NavLink>
            </div>
        )
    }
}

export default Login