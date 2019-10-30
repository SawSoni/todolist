import React, { Component } from 'react';
import { StyleInput, Button, Form, Label, Text } from '../../Components/FormElement/Input.style';
import { Formik } from 'formik';
import { addUser } from './actions';
import { connect } from "react-redux";

class UserForm extends Component {
  

    render(){
        return(
            
              <Formik
                initialValues={{title: '', body: ''}}

                validate={values => {
                    let errors = {};
                    if (!values.title) {
                        errors.title= 'Please fill your name';
                    }

                    if(!values.body){
                        errors.body = "please give you message";
                    }
                    return errors;
                }}

                onSubmit={(values, { resetForm,  setSubmitting }) => {
                    const { addUser } = this.props;
                    addUser(values);
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
                                Title *
                                
                                <StyleInput
                                    border={errors.title && '1px solid red'}
                                    name="title"
                                    placeholder="title"
                                    type="text"
                                    value={values.title}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.title && <Text color="red">{errors.title}</Text>}
                            </Label>
                            <Label>
                                Message *
                                <StyleInput
                                    name="body"
                                    placeholder="message"
                                    type="text"
                                    value={values.body}
                                    border={
                                        touched.password && errors.password && '1px solid red'
                                    }
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    
                                    />
                                {touched.body &&
                                    errors.body && <Text color="red">{errors.body}</Text>}
                            </Label>
                                <Button type="submit" disabled={ isSubmitting }>Submit</Button>
                            </Form>
                    ) 
                }
                    
        </Formik>
    

        )
    }
}

const mapStateToProps = state => ({ users: state })


function mapDispatchToProps(dispatch) {
    return {
        addUser: (user) => dispatch(addUser(user)),
    }
}



export default connect(mapStateToProps,mapDispatchToProps) (UserForm)