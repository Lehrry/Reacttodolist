import React from 'react';
import TodoList from './todolist/todolist';
// import TodoItem from './todoitem/todoitem';
import AddTodo from './addtodo/addtodo';

import './App.css';


class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }
  
  render() {
    return(
      <div className='insidetodo'>
        {/* <div className='theheader'> */}
          {/* <h5>Kindly type in your Todo</h5> */}
          <AddTodo addTodoFn={this.addTodo}></AddTodo>
        {/* </div> */}
        {/* <div className='list'> */}
          {/* <h5>List</h5> */}
          <TodoList updateTodoFn={this.updateTodo} todos={this.state.todos}></TodoList>
        {/* </div> */}
      </div>
    )
  }

  componentDidMount = () => {
    const todos = localStorage.getItem('todos')
    if(todos) {
      const savedTodos = JSON.parse(todos);
      this.setState({todos: savedTodos });
    } else {
      console.log('Your Todo list is empty!')
    }
  }

  // a function that adds items to todos
  // in order for this.state... to finish before setting the state, we need use Async & await
  addTodo = async (todo) => {
    // adding a new todo to the list/async will wait for the state to complete before moving on
    await this.setState({ todos: [...this.state.todos, {
      text: todo,
      completed: false
    }] });
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
    console.log(localStorage.getItem('todos'));
    // console.log(this.state.todos);
  }
    // just to show that the function above is working
    // addTodo = (todo) => console.log(todo);

  updateTodo = async (todo) => {
    const newTodos = this.state.todos.map(_todo => {
      if(todo === _todo) {
        return {
          text: todo.text,
          completed: !todo.completed
        }
      } else {
        return _todo;
      }
    });
    // console.log(newTodos)
    await this.setState({ todos: newTodos});
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

}

export default App;
