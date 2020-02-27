import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        { id: 1, title: 'JavaScript 函数式编程' },
        { id: 2, title: 'React 生命周期' },
        { id: 3, title: 'React Router' }
      ]
    }
    // props.history.push('/home')
  }
  render() {
    const { list } = this.state
    return (
      <>
        <Redirect to="/home" />
        <ul>
          {list.map(item => (
            <li key={item.id}>
              <Link to={`/list/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </>
    )
  }
}
