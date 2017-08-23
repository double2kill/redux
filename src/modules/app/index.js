import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todos from './reducers/todos'
import App from './component/app'

function Index () {
  return (
    <Provider store={createStore(todos)}>
      <App />
    </Provider>
  )
}

export default Index