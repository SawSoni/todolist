import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import  Wrapper from '../../Components/Wrapper/Wrapper';
import { StyleInput, Button, Form, Label, Text } from '../../Components/FormElement/Input.style';
import { Formik } from 'formik';



class Login extends Component {
    state = {
        formData : '',
    }

    render(){
        return(
            <Wrapper width="500px" margin="30px auto">
                <NavLink to="/addTodo">
                     <div href="#">addTodo</div>
                </NavLink>
              <Formik
                initialValues={{firstName: '', password: ''}}

                validate={values => {
                    let errors = {};
                    if (!values.firstName) {
                        errors.firstName= 'Please fill your firstName';
                    }

                    if(!values.password){
                        errors.password = "A password is required";
                    }else if (values.password.length < 6) {
                        errors.password = "password must be 6 characters";
                    }
                    return errors;
                }}

                onSubmit={(values, { resetForm,  setSubmitting }) => {
                    console.log(values)
                    this.setState({
                        formData: values
                    })
                    console.log("..............", this.state.formData)
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
                                FirstName *
                                
                                <StyleInput
                                    border={errors.firstName && '1px solid red'}
                                    name="firstName"
                                    placeholder="FirstName"
                                    type="text"
                                    value={values.firstName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.firstName && <Text color="red">{errors.firstName}</Text>}
                            </Label>
                            <Label>
                                Password *
                                <StyleInput
                                    name="password"
                                    placeholder="password"
                                    type="password"
                                    value={values.password}
                                    border={
                                        touched.password && errors.password && '1px solid red'
                                    }
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    
                                    />
                                {touched.password &&
                                    errors.password && <Text color="red">{errors.password}</Text>}
                            </Label>
                                <Button type="submit" disabled={ isSubmitting }>Login</Button>
                            </Form>
                    
                    ) 
                }
                    
        </Formik>


                
    </Wrapper>
        )
    }
}

export default Login