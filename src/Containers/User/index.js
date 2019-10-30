import React, { Component } from 'react';
import UserForm from './UserForm';
import Wrapper from '../../Components/Wrapper/Wrapper';

class User extends Component {
    render(){
        return(
            <Wrapper>
                <UserForm></UserForm>
            </Wrapper>
        )
    }
}

export default User;