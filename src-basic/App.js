import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './components/Index'
import List from './components/List'
import Home from './components/Home'

export default () => {
  return (
    <Router>
      <Link to="/">首页</Link>
      {/* exact表示精确匹配，一般项目中只需要首页加上exact */}
      {/* path="/list/:id"是一个匹配规则，路由跳转的时候的路径必须传id值，不然会匹配失败 */}
      <Route path="/" exact component={Index} />
      <Route path="/home" component={Home} />
      <Route path="/list/:id" component={List} />
    </Router>
  )
}
