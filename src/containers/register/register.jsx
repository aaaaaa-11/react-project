/* 
注册路由组件
 */
import React, { Component } from 'react'
import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Radio,
  Button
} from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { register } from '../../redux/actions'
import Logo from '../../components/logo/logo'

const ListItem = List.Item
class Register extends Component {

  state = {
    username: '', // 用户名
    password: '', // 密码
    password2: '',  // 确认密码
    type: 'dashen'  // 用户类型
  }

  register = () => {
    this.props.register(this.state)
  }

  // 处理输入数据的改变：更新对应的状态
  handleChage = (name, val) => {
    // 更新状态
    this.setState({
      [name]: val  // 属性名是name的值
    })
  }

  toLogin = () => {
    this.props.history.replace('/login')
  }

  render () {
    const {type} = this.state
    const {msg, redirectTo} = this.props.user
    // 如果redirectTo有值，就需要重定向到指定的路由
    if (redirectTo) {
      return <Redirect to={redirectTo}/>
    }
    return (
      <div>
        <NavBar>前&nbsp;端&nbsp;招&nbsp;聘</NavBar>
        <Logo />
        <WingBlank>
          <List>
            { msg ? <div className="err-msg">{msg}</div> : null }
            <WhiteSpace />
            <InputItem placeholder="请输入用户名" onChange={val => {this.handleChage('username', val)}}>用户名：</InputItem>
            <WhiteSpace />
            <InputItem placeholder="请输入密码" type="password" onChange={val => {this.handleChage('password', val)}}>密&nbsp;&nbsp;&nbsp;码：</InputItem>
            <InputItem placeholder="确认密码" type="password" onChange={val => {this.handleChage('password2', val)}}>确认密码：</InputItem>
            <ListItem>
              <span>用户类型：</span>&nbsp;
              <Radio checked={type === 'dashen'} onClick={() => this.handleChage('type', 'dashen')}>大神</Radio>&nbsp;&nbsp;&nbsp;
              <Radio checked={type === 'laoban'} onClick={() => this.handleChage('type', 'laoban')}>老板</Radio>
            </ListItem>
            <Button type="primary" onClick={this.register}>注册</Button>
            <Button onClick={this.toLogin}>已有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default connect(
  state => ({user: state.user}),
  {register}
)(Register)
