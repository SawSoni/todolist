import React, { Component } from 'react';
import { StyleInput, Button, Form, Label, Text } from '../../Components/FormElement/Input.style';
import { Formik } from 'formik';
import { addUser, getUsers, addUserDemo } from './actions';
import { connect } from "react-redux";
import Wrapper from '../../Components/Wrapper/Wrapper';
import ShowUsers from './showUsers';



class UserForm extends Component {
  
    componentDidMount(){
        const { getUsers } = this.props;
        getUsers();
    }
    render(){
        console.log("what is the props here", this.props.users.userReducer);
        return(
            <Wrapper width="50%" margin="20px auto">
                <h1>User Form</h1>
              <Formik
                initialValues={{name: '', userName: ''}}

                validate={values => {
                    let errors = {};
                    if (!values.name) {
                        errors.name= 'Please fill your name';
                    }

                    if(!values.userName){
                        errors.userName = "please give you message";
                    }
                    return errors;
                }}

                onSubmit={(values, { resetForm,  setSubmitting }) => {
                    const { addUser, addUserDemo } = this.props;
                    addUser(values);
                    addUserDemo();
                    console.log("userData", values)
                    resetForm()
                    setSubmitting(false);
                    }} 
                >
                  

                    {({
                        isSubmitting,
                        errors,
                        touched,
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values
                    }) => (
                       
                            <Form onSubmit={handleSubmit}> 
                            <Label>
                                <Wrapper width="70px"  margin="10px 5px">
                                name *
                                </Wrapper>
                                <StyleInput
                                    border={errors.name && '1px solid red'}
                                    name="name"
                                    placeholder="name"
                                    type="text"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.name && <Text color="red">{errors.name}</Text>}
                            </Label>
                            <Label>
                            <Wrapper width="70px"  margin="10px 5px">
                                 UserName *
                             </Wrapper>
                               
                                <StyleInput
                                    name="userName"
                                    placeholder="message"
                                    type="text"
                                    value={values.userName}
                                    border={
                                        touched.password && errors.password && '1px solid red'
                                    }
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    
                                    />
                                {touched.userName &&
                                    errors.userName && <Text color="red">{errors.userName}</Text>}
                            </Label>
                                <Button type="submit" disabled={ isSubmitting }>Submit</Button>
                            </Form>
                       
                    ) 
                }
                    
        </Formik>
        {this.props.users.userReducer.length > 10 &&
        <ShowUsers users={this.props.users.userReducer}></ShowUsers>
        }
     </Wrapper>

        )
    }
}

const mapStateToProps = state => ({ users: state })


function mapDispatchToProps(dispatch) {
    return {
        addUser: (user) => dispatch(addUser(user)),
        getUsers: () => dispatch(getUsers()),
        addUserDemo: () => dispatch(addUserDemo())
    }
}



export default connect(mapStateToProps,mapDispatchToProps) (UserForm)