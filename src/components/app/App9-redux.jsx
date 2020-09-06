import React from 'react'
import * as actions from '../../redux/actions'

import './app.css'

var timer = null
class App extends React.Component {

  increment = () => {
    // 获取选择增加量
    let num = this.select.value * 1
    // 调用store的方法更新状态
    this.props.store.dispatch(actions.increment(num))
  }

  decrement = () => {
    let num = this.select.value * 1
    const count = this.props.store.getState()
    if (count >= num) {
      this.props.store.dispatch(actions.decrement(num))
    }
  }

  incrementIfOdd = () => {
    let num = this.select.value * 1
    const count = this.props.store.getState()
    if (count % 2) {
      this.props.store.dispatch(actions.increment(num))
    }
  }

  asyncIncrement = () => {
    // 获取选择增加量
    let num = this.select.value * 1
    if (timer) {
      clearTimeout(timer)
      // 更新状态
    }
    timer = setTimeout(() => {
      this.props.store.dispatch(actions.increment(num))
    }, 500)
  }

  render () {
    const count = this.props.store.getState()
    return (
      <div className="app-container">
        <p className="click-count">Click&nbsp;{count}&nbsp;times</p>
        <div className="btn-wrapper">
          <select name="count" ref={select => this.select = select}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.incrementIfOdd}>increment if odd</button>
          <button onClick={this.asyncIncrement}>increment async</button>
        </div>
      </div>
    )
  }
}
export default App
