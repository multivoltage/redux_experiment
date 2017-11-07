import React from 'react';
import { connect } from 'react-redux'
import { deleteTodo, editTodo } from '../actions'


class Todo extends React.Component {
  
  state = {
    editable: false
  }

  render(){

    const { id, text, deleteTodo } = this.props
    
    return (
      <li>
          <input type="text" value={text} disabled={!this.state.editable} 
              onChange={this.handleTextChange.bind(this)}
              onBlur={this.handleLostFocus.bind(this)}/>
          <button onClick={this.toogleEditable.bind(this)}>EDIT</button>
          <button onClick={() => { deleteTodo(id) }}>DELETE</button>
      </li>
    )
  }

  toogleEditable(){
    this.setState({ editable: !this.state.editable })
  }

  handleLostFocus(e){
    this.setState({ editable: false })
  }

  handleTextChange(event){

    const { id, editTodo } = this.props

    let newText = event.target.value
    editTodo(this.props.id,newText)
  }
}

const mapDispatchToProps = (dispatch) => {
  
    return ({
      deleteTodo: (id) => { dispatch(deleteTodo(id)) },
      editTodo: (id,newText) => { dispatch(editTodo(id,newText)) }
    })
}
export default connect(undefined,mapDispatchToProps)(Todo)