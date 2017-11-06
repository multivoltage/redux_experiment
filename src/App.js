import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { fetchTodos, fetchTodosOneToOne, insertNewTodo } from './actions'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

class App extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){
    const { dispatch } = this.props
    dispatch(fetchTodosOneToOne())
  }

  render() {
    
    const { dispatch } = this.props

    return (
      <div className="App">
        <AddTodo />
        <TodoList todos={this.props.todos}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  const { todos } = state.todosWrapper
  return {
    todos
  }
}

export default connect(mapStateToProps)(App);
