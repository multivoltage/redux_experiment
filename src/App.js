import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { fetchTodos } from './actions'

class App extends Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){
    const { dispatch } = this.props; 
    dispatch(fetchTodos())
  }

  render() {

    return (
      <div className="App">
        {/* <VisibleTodoList /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { todos } = state
  return {
    todos
  }
}
export default connect(mapStateToProps)(App);
