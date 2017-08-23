import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
const addTodo = require('../actions/index').addTodo

const mapStateToProps = state => {
  return {
    todos: state
  }
}

const mapDispatchToProps = (dispatch) => ({
  onClick: (value) => {
    dispatch(addTodo(value))
  }
})

let aaaa = ({todos, onClick}) => {
  let input
  return (
    <ul>
      {todos.map(todo => {
        return <li key={todo.id}>{todo.text}</li>
      })}
      <input ref={node => {input=node}}/>
      <button 
        onClick={e => {
            onClick(input.value)
            input.value = ''
          }
        }
      >提交</button>
    </ul>
  )
}

const App = connect(mapStateToProps,mapDispatchToProps)(aaaa)

export default App