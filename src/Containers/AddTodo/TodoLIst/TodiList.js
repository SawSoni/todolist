import React, { Component } from 'react';


class TodoList extends Component {


    createTodoList = () => {
        const { list } = this.props;

        const getTextColor = (item) => {
            if(item.status === 'Pending'){
                return 'red';
            }
            return 'green';
        }
        const data = list.map((item, index) => {
            const textColor = getTextColor(item);
            const v = <li style={ {color:textColor} } key={index}>{item.task}
                <span style={ {paddingLeft:'20px'}}>
                    <button onClick={ () => item.updateStatus(index)}>Done</button>
                </span>
            </li>
            return v;
        }
        );
        return (
            data
        )
    }

    render() {
        return (
            <ul>
                {this.createTodoList()}
            </ul>
        )
    }
}

export default TodoList