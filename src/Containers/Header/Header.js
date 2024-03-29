import React, { Component } from 'react';
import './Header.styled.js';
import Toolbar from '../Toolbar/Toolbar'
import SlideDrower from '../SlideDrower/SlideDrower'
import BackDrop from '../BackDrop/BackDrop'
import Wrapper from '../../Components/Wrapper/Wrapper'
import { Nav, Spacer, Nav2 } from './Header.styled';
import Button from '../../Components/Button/Button';

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
                <Nav>
                    <Wrapper>
                        <span>logo</span>
                    </Wrapper>
                    <Spacer/>
                    <Wrapper>
                        <Button type="button" text="EN"/>
                    </Wrapper>
                </Nav>
                <Nav2>
                    <Toolbar drowerClickHandler={this.drowerToggleClickHandler} />
                    <SlideDrower show={sideDrawerOpen}/>
                    {backDrop}
                </Nav2>
            </Wrapper>
        )
    }
}

export default PreLoginHeader