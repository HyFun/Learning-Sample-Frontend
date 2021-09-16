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

  onClickItem = (id, mode) => {
    const item = this.state.list.find((v) => v.id === id)
    const p = {
      pathname: `${this.props.match.path}/detail`,
      state: item
    }
    if (mode === 0) {
      // push查看
      this.props.history.push(p)
    } else {
      this.props.history.replace(p)
    }
  }

  render() {
    const { list } = this.state
    return (
      <>
        <ul>
          {list.map((v) => (
            <li key={v.id}>
              {/* <Link
                to={{
                  pathname: `${this.props.match.path}/detail`,
                  state: {
                    id: v.id,
                    title: v.title
                  }
                }}
              >
                {v.title}
              </Link> */}
              {v.title}
              <button onClick={() => this.onClickItem(v.id, 0)}>push</button>
              <button onClick={() => this.onClickItem(v.id, 1)}>replace</button>
            </li>
          ))}
        </ul>
        <hr />
        <Route path={`${this.props.match.path}/detail`} component={Detail} />
      </>
    )
  }
}
