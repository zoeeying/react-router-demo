import React, { Component } from 'react'
export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0
    }
  }
  componentDidMount() {
    this.setState({ id: this.props.match.params.id })
  }
  render() {
    const { id } = this.state
    return <h2>{`文章id是${id}`}</h2>
  }
}
