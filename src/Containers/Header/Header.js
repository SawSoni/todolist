import React, { Component } from 'react';
import './Header.styled.js';
import Toolbar from './Toolbar/Toolbar'
import SlideDrower from './SlideDrower/SlideDrower'
import BackDrop from './BackDrop/BackDrop'
import Wrapper from '../../Components/Wrapper/Wrapper'
import { Nav2 } from './Header.styled';


class PreLoginHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navData: ["Business Loans", "Partner Bank", "About Us", "Login",],
            sideDrawerOpen: false
        }
    }
    drowerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen }
        });
    };

    backDropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    };

   /*  handleLoggedIn () {
        console.log("user has clicked login button----------------");
        this.setState((preState) => ({
            loggedIn : !preState.loggedIn
        }))
    } */

    render() {
        const { sideDrawerOpen } = this.state;
        let backDrop;
        if (sideDrawerOpen) {
            backDrop = <BackDrop click={this.backDropClickHandler}></BackDrop>;
        }
        return (
            <Wrapper>
                <Nav2>
                    <Toolbar drowerClickHandler={this.drowerToggleClickHandler} todoData={this.props}/>
                    <SlideDrower show={sideDrawerOpen}/>
                    {backDrop}
                </Nav2>
            </Wrapper>
        )
    }
}

export default PreLoginHeader