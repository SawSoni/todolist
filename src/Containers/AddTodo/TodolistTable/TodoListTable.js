import React, { Component } from 'react';
import Wrapper from '../../../Components/Wrapper/Wrapper'
import { HeaderRow, Col, Row, RowContainer, FooterRow } from './TodoListTable.styled';
import Button from '../../../Components/Button/Button';

class ToDoListTable extends Component {
    state = {
        tableHeader : [ 'Date', 'Todo', 'Status', `Button` ],
    }

    tableHeader = () => {
        const { tableHeader } = this.state;
        const columns = tableHeader.map((data,index) => <Col key={index}>{ data }</Col>)
        return(
            <HeaderRow>
                    {columns}
            </HeaderRow>
        )
    }

    createTodoList = () => {

        const getRow = (item, index) => {
            return <Row key={index}>
            <Col>{item.date}</Col>
            <Col>{item.task}</Col>
            {<Col color={item.status}>{item.status}</Col>}
            {<Col><Button text="Done" color="#ABC" onclick={() => item.updateStatus(item.id)}></Button></Col>}
         </Row>
        }
        const { list } = this.props;
         const todoList = list.map((item, index) => getRow(item, index))
        return(
            <RowContainer>
                {todoList}
            </RowContainer>
            
        ) 
    }

    render(){
        return(
            <Wrapper>
                {this.tableHeader()}
                {this.createTodoList()}
                <FooterRow></FooterRow>
            </Wrapper>
        )
    }
}

export default ToDoListTable

