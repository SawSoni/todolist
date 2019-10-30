import React, { Component } from 'react';
import { Formik } from 'formik';
import Wrapper from '../../Components/Wrapper/Wrapper';
import { H1 } from '../../Components/H1/H1.styled';
import { StyleInput, Button, Form, Label, Text } from '../../Components/FormElement/Input.style';
import Header from '../Header/Header';
import TodoListTable from '../TodolistTable/TodoListTable';
import { connect } from "react-redux";
import { addTodo, updateTodo } from '../../js/actions/index'
import uuidv1 from "uuid";


class AddTodo extends Component {
    
    updateStatus = (id) => {
        const {todos, updateTodo} = this.props; 
        let item = todos.todoReducer.filter( (todo) => todo.id === id);
        let todo = item[0];
        todo.status = 'Completed';
        console.log("this is todo", todo);
        updateTodo(todo);
    }

    render(){
        const {todos} = this.props;
        const todoData = todos.todoReducer; 
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

            onSubmit={(todo, { resetForm,  setSubmitting }) => {
                todo.status = 'Pending';
                todo.updateStatus = this.updateStatus;
                const id = uuidv1();
                todo.id = id;
                const {addTodo} = this.props
                addTodo({todo})
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
                       { todoData.length > 0 &&
                            <TodoListTable list={todoData}></TodoListTable>}
                    </Wrapper>
                )}
            </Formik>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: ({todo}) => dispatch(addTodo(todo)),
        updateTodo: (todo) => dispatch(updateTodo(todo))
    }
}

const mapStateToProps = state => ({ todos: state })

const connectedTodo = connect(mapStateToProps, mapDispatchToProps ) (AddTodo)


export default connectedTodo