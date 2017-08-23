import React from 'react'
import { render } from 'react-dom'
import App from './modules/app'
import Tree from './modules/tree'
render(
  <div>
    <App />
    <Tree />
  </div>,
  document.getElementById("app")
)
