import React from 'react';
import './addtodo.css';

class AddTodo extends React.Component {

    constructor() {
        super();
        this.state = {
            todo: ''
        };
    }

    render() {
        return(
            <div className='addtodo-cont'>
                <h5>Kindly type in your todo item below</h5>
                <form onSubmit={(e) => this.submitTodo(e)}>
                    <input id='addTodoInput'  onChange={(e) => this.updateInput(e)} type='text'></input>
                    <button type='submit'>Add Todo</button>
                </form>
            </div>
        );
    }

    updateInput = (e) => {
       this.setState({ todo: e.target.value});
    }

    submitTodo = (e) => {
        e.preventDefault();
        this.props.addTodoFn(this.state.todo);
        document.getElementById('addTodoInput').value = '';
    }
}

export default AddTodo;