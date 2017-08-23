import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import family from './reducers/person'
import Person from './component/person'

function Index () {
  return (
    <Provider store={createStore(family)}>
      <Person myId={0}/>
    </Provider>
  )
}

export default Index