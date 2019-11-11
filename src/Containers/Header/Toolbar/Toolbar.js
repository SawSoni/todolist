import React, { Component } from 'react'
import SlideDrowerToggleButton from '../SlideDrower/SlideDrowerToggleButton'
import './Toolbar.styled.js';
import { Link } from 'react-router-dom';
import { Header, Nav,ToggleBar, UlParent, Ul, Li } from './Toolbar.styled';
import Button from '../../../Components/Button/Button';
import Input from '../../../Components/NormalInput/Input'
// import { loggedIn } from "../../js/actions/index";
// import { connect } from "react-redux";

class Toolbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navbar  : [ 'Businessloan', 'PartnerBank','Aboutus', 'Login'],
            // loggedIn : this.props.loggedIn
        }
    }

    handleChange = (e) =>  {
        console.log("user has clicked search input--------------1--",e.target.value);
        const todoData = this.props;
        const findTargetObjByStatus = todoData.todoData.todoData.filter((item) => item.status === e.target.value);
        console.log("what is the object name ------",todoData.todoData.todoData);
        console.log("this is the object", findTargetObjByStatus);
        /* this.setState((preState) => ({
            loggedIn : !preState.loggedIn
        })) */
    }

    render() { 
        return (
            <Header>
                <Nav>
                    <ToggleBar>
                        <SlideDrowerToggleButton click={this.props.drowerClickHandler} />
                    </ToggleBar>
                    <Link to="/">
                         {/* <div className="loginBtn"><button >Login</button></div> */}
                         <Button text="Login"></Button>
                    </Link>

                    <Input type="text" name="serchTodo"  placeholder="SearchTodo" onchange={this.handleChange}></Input>
                    
                    <UlParent>
                        <Ul>
                            <Li>Home</Li>
                            <Link to="/addToDo">
                                <b><Li>AddToDo</Li></b>
                            </Link>
                            <Link to="/about">
                                <b><Li>AboutUs</Li></b>
                            </Link>
                            <Link to="/user">
                                <b><Li>Users</Li></b>
                            </Link>
                            
                        </Ul>
                    </UlParent>
                </Nav>
            </Header>
        )
    }
}
 
/* const mapStateToProps = (state) => ({loggedIn: state})

const mapDispatchToProps = function(dispatch){
    return {
        loggedIn : login => dispatch(loggedIn(login))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar) */

export default Toolbar