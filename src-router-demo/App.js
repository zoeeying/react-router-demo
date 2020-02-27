import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Blog from './components/Blog'
import Hobby from './components/Hobby'
import './index.css'

export default () => {
  const routeConfig = [
    { path: '/', component: Home, title: '首页', exact: true },
    { path: '/blog', component: Blog, title: '博客', exact: false },
    { path: '/hobby', component: Hobby, title: '爱好', exact: false }
  ]
  return (
    <Router>
      <div className="mainDiv">
        <div className="leftNav">
          <h4>小畅叙的网站</h4>
          <ul>
            {routeConfig.map(item => (
              <li key={item.path}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="rightMain">
          {routeConfig.map(item => (
            <Route
              path={item.path}
              key={item.path}
              component={item.component}
              exact={item.exact}
            />
          ))}
        </div>
      </div>
    </Router>
  )
}
