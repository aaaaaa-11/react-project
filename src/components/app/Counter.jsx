import React from 'react'
import Proptypes from 'prop-types'

import './app.css'

export default class Counter extends React.Component {
  static propTypes = {
    count: Proptypes.number.isRequired,
    increment: Proptypes.func.isRequired,
    decrement: Proptypes.func.isRequired,
    incrementAsync: Proptypes.func.isRequired
  }

  increment = () => {
    // 获取选择增加量
    let num = this.select.value * 1
    // 调用store的方法更新状态
    this.props.increment(num)
  }

  decrement = () => {
    let num = this.select.value * 1
    const count = this.props.count
    if (count >= num) {
      this.props.decrement(num)
    }
  }

  incrementIfOdd = () => {
    let num = this.select.value * 1
    const count = this.props.count
    if (count % 2) {
      this.props.increment(num)
    }
  }

  asyncIncrement = () => {
    // 获取选择增加量
    let num = this.select.value * 1
    // 更新状态
    this.props.incrementAsync(num)
  }

  render () {
    const {count} = this.props
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
