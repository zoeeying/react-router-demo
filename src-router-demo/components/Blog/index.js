import React from 'react'
import { Route, Link } from 'react-router-dom'
import FlutterBlog from './FlutterBlog'
import ReactBlog from './ReactBlog'
import VueBlog from './VueBlog'
import '../../index.css'

// App.js中，组件最外层已经包裹了Router，所以子路由可以直接用Route即可
export default () => {
  return (
    <>
      <div className="topNav">
        <ul>
          <li>
            <Link to="/blog/reactblog">React</Link>
          </li>
          <li>
            <Link to="/blog/vueblog">Vue</Link>
          </li>
          <li>
            <Link to="/blog/flutterblog">Flutter</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2>小畅叙的博客</h2>
        <Route path="/blog/reactblog" component={ReactBlog} />
        <Route path="/blog/vueblog" component={VueBlog} />
        <Route path="/blog/flutterblog" component={FlutterBlog} />
      </div>
    </>
  )
}
