import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {id:1, name: "Learn JSX", iscomplete:true},
        {id:2, name: "Build App", iscomplete:false},
        {id:3, name: "Ship it!", iscomplete:false},
      ],
      currentTodo: ""
    }
    this.handelInputChange = this.handelInputChange.bind(this)
  }
  handelInputChange (event){
    this.setState({
      currentTodo: event.target.value
      })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>React TODO</h2>
        </div>
        <div className="Todo-App">
          <TodoForm handelInputChange={this.handelInputChange} currentTodo={this.state.currentTodo}/>
          <TodoList todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
