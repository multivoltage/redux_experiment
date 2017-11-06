import React, { Component } from 'react'
import { connect } from 'react-redux'
import { insertNewTodo } from '../actions'

class AddTodo extends Component {
  
  render(){
        
    const { insertNewTodo } = this.props

    return <button onClick={() => { insertNewTodo('this is a new todo') }}>ADD TODO</button>
  }
}

const mapDispatchToProps = (dispatch) => {

  return ({
    insertNewTodo: (text) => { dispatch(insertNewTodo(text)) }
  })
}


export default connect(undefined,mapDispatchToProps)(AddTodo);