import React from 'react';
import { connect } from 'react-redux'
import { deleteTodo } from '../actions'


class Todo extends React.Component {
  
  render(){

    const { id, text, deleteTodo } = this.props
    
    return (
        <li>
          {text}
          <button onClick={() => { deleteTodo(id) }}>DELETE</button>
      </li>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  
    return ({
      deleteTodo: (id) => { dispatch(deleteTodo(id)) }
    })
}
export default connect(undefined,mapDispatchToProps)(Todo)