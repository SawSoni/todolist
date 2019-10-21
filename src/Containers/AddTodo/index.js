import React, { Component } from 'react';
import { Formik } from 'formik';
import Wrapper from '../../Components/Wrapper/Wrapper';
import { H1 } from '../../Components/H1/H1.styled';
import { StyleInput, Button, Form, Label, Text } from '../../Components/FormElement/Input.style';
import Header from '../Header/Header';
import TodoListTable from '../TodolistTable/TodoListTable';


class AddTodo extends Component {
    state = {
       todos : [], 
    }

    updateStatus = (index) => {
        console.log("update function------------------")
        let todo = this.state.todos[index];
        todo.status = 'Completed';
        this.setState((preState) => ({
            todos: [...preState.todos]
        }))
    }

    render(){
        return(
            <Formik
            initialValues={{date: '', task: ''}}

            validate={values => {
                let errors = {};
                if (!values.date) {
                    errors.date= 'Please fill your date';
                }

                if(!values.task){
                    errors.task = "please give your task";
                }
                return errors;
            }}

            onSubmit={(values, { resetForm,  setSubmitting }) => {
                values.status = 'Pending';
                values.updateStatus = this.updateStatus;
                this.setState((preState) => ({
                    todos: [...preState.todos, values]
                }))
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
                    <Wrapper>
                        <Header></Header>
                        
                        <Wrapper width="80%" margin=" 20px auto">
                            <H1>Add your new Todo</H1>
                            <Form onSubmit={handleSubmit}> 
                            <Label>
                                Date *
                                
                                <StyleInput
                                    border={errors.firstName && '1px solid red'}
                                    name="date"
                                    placeholder="date"
                                    type="date"
                                    value={values.date}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.date && <Text color="red">{errors.date}</Text>}
                            </Label>
                            <Label>
                                Task *
                                <StyleInput
                                    name="task"
                                    placeholder="Your Task"
                                    type="text"
                                    value={values.task}
                                    border={
                                        touched.task && errors.task && '1px solid red'
                                    }
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    
                                    />
                                {touched.task &&
                                    errors.task && <Text color="red">{errors.task}</Text>}
                            </Label>
                                <Button type="submit" disabled={isSubmitting}>Add</Button>
                            </Form>
                        </Wrapper>
                            {/* <TodoList list={this.state.todos}></TodoList> */}
                            <TodoListTable list={this.state.todos}></TodoListTable>
                    </Wrapper>
                )}
            </Formik>
        )
    }
}

export default AddTodo