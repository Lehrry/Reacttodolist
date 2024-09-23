import React from 'react';
import TodoItem from '../todoitem/todoitem';
import './todolist.css';

class TodoList extends React.Component {
    render() {
        const {todos} = this.props;
        return(
            <div className='todolist'>
                <h5>Your List</h5>
                <div className='list'>
                    {
                        todos.map((_todos, _index) => {
                            return (
                                // <div key={_index}>
                                //     {_todos}
                                // </div>
                                // instead of using a div to list items, we use the item Component
                                <TodoItem updateTodoFn={this.updateTodo} key={_index} todo={_todos}></TodoItem>
                            )
                        })
                    }
                </div>
            </div>
        );
    }

    updateTodo = (todo) => {
        this.props.updateTodoFn(todo);
    } 
}

export default TodoList;