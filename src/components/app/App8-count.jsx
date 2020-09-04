import React from 'react'

import './app.css'

class App extends React.Component {
  state = {
    count: 0
  }

  increment = () => {
    // 获取选择增加量
    let num = this.select.value
    num = Number(num)
    // 得到原count
    const count = this.state.count
    // 更新状态
    this.setState({
      count: count + num
    })
  }

  decrement = () => {
    let num = this.select.value
    num = Number(num) || 0
    const count = this.state.count
    if (count >= num) {
      this.setState({
        count: count - num
      })
    }
  }

  incrementIfOdd = () => {
    let num = this.select.value
    num = Number(num)
    const count = this.state.count
    if (count % 2) {
      this.setState({
        count: count + num
      })
    }
  }

  asyncIncrement = () => {
    // 获取选择增加量
    let num = this.select.value
    num = Number(num)
    // 得到原count
    const count = this.state.count
    // 更新状态
    setTimeout(() => {
      this.setState({
        count: count + num
      })
    }, 500)
  }

  render () {
    return (
      <div className="app-container">
        <p className="click-count">Click&nbsp;{this.state.count}&nbsp;times</p>
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
