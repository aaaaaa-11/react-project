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

  showDetail = (id) => {
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
                <button onClick={(i) => this.showDetail(i)}>查看详情</button>
              </li>
            ))
          }
        </ul>
        <Route path='/home/message/detail/:id' component={MessageDetail} />
      </div>
    )
  }
}