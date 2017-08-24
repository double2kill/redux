import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import Person from './component/person'

function Index () {
  return (
    <Provider store={createStore(reducers)}>
      <ul>
        <p>点击"姓氏"进行添加</p>
        <Person myId={0}/>
      </ul>
    </Provider>
  )
}

export default Index