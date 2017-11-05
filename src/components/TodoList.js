import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  
  render(){

    const { onTodoClick } = this.props;
    const todos = this.props.todos.todos;
    
    return (
      <ul>
        {todos.map(todo => (
          <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
        ))}
      </ul>
    )
  }
}