import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import MessageDetail from './message-detail'
import MyNavLink from '../myNavLink/myNavLink'

export default class Message extends Component {
  state = {
    messages: []
  }

  componentDidMount () {
    // 模拟发送ajax请求异步数据
    setTimeout(() => {
      const messages = [
        { id: 1, title: 'message1' },
        { id: 2, title: 'message2' },
        { id: 3, title: 'message3' },
        { id: 4, title: 'message4' },
      ]
      this.setState({messages})
    }, 1000)
  }

  showDetail (id) {
    this.props.history.push(`/home/message/detail/${id}`)
  }

  replaceDetail(id) {
    this.props.history.replace(`/home/message/detail/${id}`)
  }

  goBack = () => {
    this.props.history.goBack()
  }

  goForward = () => {
    this.props.history.goForward()
  }

  reqPage = () => {
    window.location = "https://www.baidu.com/"
  }

  render () {
    return (
      <div className="msg-container">
        <ul className="msg-content">
          {
            this.state.messages.map((message, i) => (
              <li className="msg-item" key={i}>
                <MyNavLink to={`/home/message/detail/${message.id}`} >{message.title}</MyNavLink>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.showDetail.bind(this, message.id)}>查看详情(push)</button>
                <button onClick={this.replaceDetail.bind(this, message.id)}>查看详情(replace)</button>
              </li>
            ))
          }
        </ul>
        <p>
          <button onClick={this.goBack}>goBack</button>
          <button onClick={this.goForward}>goForwod</button>
        </p>
        <p onClick={this.reqPage}>页面跳转</p>
        <Route path='/home/message/detail/:id' component={MessageDetail} />
      </div>
    )
  }
}