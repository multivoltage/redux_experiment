import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

// on each component we import only actions that we need to fire
import { fetchTodos, fetchTodosOneToOne, insertNewTodo } from './actions'

import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import ReactJson from 'react-json-view'

class App extends Component {

  constructor(props){
    super(props)
  }

  /**
   * this is the perfect method where put some async operation, like fetchTodosOneToOne()
   */
  componentDidMount(){
    const { dispatch } = this.props
    dispatch(fetchTodosOneToOne())
  }

  render() {
    
    const { dispatch } = this.props

    return (
      <div className="App">
        <AddTodo className="addTodo"/>
        <TodoList todos={this.props.todos}/>
        {this.renderDebug()}
      </div>
    );
  }

  renderDebug(){
    const style = {
      with: '500px',
    }
    return (
      <div className="debug">
        <p>props</p>
          <ReactJson src={this.props} />
      </div>
    )
  }
}

/**
 * Inside App component we' ll find default props passed by parent but
 * also todos. So we can use this.props.todos 
 * So we never user App like <App todos={some_array} /> because connect()
 * insert some_array in this.props
 */
const mapStateToProps = (state) => {

  const { todos } = state.todosWrapper
  return {
    todos
  }
}

/**
 * connect() is a react-redux helpers that allow us to export a components
 * (App in this case) with interested fields in components' props.
 * This work thanks mapStateToProps function
 */
export default connect(mapStateToProps)(App);
