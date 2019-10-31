import React, { Component } from 'react';
import UserForm from './UserForm';
import Wrapper from '../../Components/Wrapper/Wrapper';
import Header from '../../Containers/Header/Header'

class User extends Component {
    render(){
        return(
            <Wrapper>
                <Header></Header>
                <UserForm></UserForm>
            </Wrapper>
        )
    }
}

export default User;