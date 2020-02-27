import React from 'react'
import { Route, Link } from 'react-router-dom'
import Drawing from './Drawing'
import Guitar from './Guitar'
import '../../index.css'

// App.js中，组件最外层已经包裹了Router，所以子路由可以直接用Route即可
export default () => {
  return (
    <>
      <div className="topNav">
        <ul>
          <li>
            <Link to="/hobby/drawing">画画</Link>
          </li>
          <li>
            <Link to="/hobby/guitar">吉他</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2>小畅叙的爱好</h2>
        <Route path="/hobby/drawing" component={Drawing} />
        <Route path="/hobby/guitar" component={Guitar} />
      </div>
    </>
  )
}
