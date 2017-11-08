import React, { Component } from 'react'
import { connect } from 'react-redux'
import { insertNewTodo } from '../actions'

class AddTodo extends Component {
  
  render(){

    return (
      <div>
        <input ref="tv" type="text" placeholder="become rich" />
        <button onClick={this.handleClick.bind(this)}>ADD TODO</button>      
      </div>
    )
  }

  handleClick(){

    const { insertNewTodo } = this.props
    insertNewTodo(this.refs.tv.value)
    this.refs.tv.value = '';
  }
}

const mapDispatchToProps = (dispatch) => {

  return ({
    insertNewTodo: (text) => { dispatch(insertNewTodo(text)) }
  })
}


export default connect(undefined,mapDispatchToProps)(AddTodo);