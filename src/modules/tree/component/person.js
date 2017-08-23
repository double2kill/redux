import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { addNode } from '../actions/index'

const mapStateToProps = (state, ownProps) => {
  return state[ownProps.myId]
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleAddClick: (value) => {
      dispatch(addNode('初始化', ownProps.myId))
    }
  }
}

let App = ({name, childIds, handleAddClick, myId}) => {
  let input
  return (
    <ul>
      <button>折叠</button>
      <span>{name}</span>
      <button onClick={handleAddClick}>添加</button>
      {childIds.map(childId => {
        return <App key={childId} myId={childId} />
      })}
    </ul>
  )
}

App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App