import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  
  render(){

    const todos = this.props.todos || [];

    return (
      <ul>
        {todos.map(todo => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    )
  }
}