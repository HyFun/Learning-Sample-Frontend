import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import Detail from './Detail'

export default class AboutMe extends Component {
  state = {
    list: [
      { id: '1', title: '消息1' },
      { id: '2', title: '消息2' },
      { id: '3', title: '消息3' }
    ]
  }

  render() {
    const { list } = this.state
    return (
      <>
        <ul>
          {list.map((v) => (
            <li key={v.id}>
              <Link
                to={`${this.props.match.path}/detail?id=${v.id}&title=${v.title}`}
              >
                {v.title}
              </Link>
            </li>
          ))}
        </ul>
        <hr />
        <Route path={`${this.props.match.path}/detail`} component={Detail} />
      </>
    )
  }
}
