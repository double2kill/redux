import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
const addTodo = require('../actions/index').addTodo

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => {
  return {
    onClick() {
      console.log(this.props)
      console.log()
      return dispatch(addTodo('test text1'))
    }
  }
}

let App = ({todos, onClick}) => {
  <ul>
    {todos.map(todo => {
      return <li key={todo.id}>{todo.text}</li>
    })}
    <button onClick={this.handleClick}>123</button>
  </ul>
}

App = connect(mapStateToProps,mapDispatchToProps)(App)

export default App