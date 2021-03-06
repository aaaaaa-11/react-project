/* 
登录路由组件
 */
import React, { Component } from 'react'
import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Button
} from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { login } from '../../redux/actions'
import Logo from '../../components/logo/logo'

class Login extends Component {

  state = {
    username: '', // 用户名
    password: '', // 密码
  }

  login = () => {
    this.props.login(this.state)
  }

  // 处理输入数据的改变：更新对应的状态
  handleChage = (name, val) => {
    // 更新状态
    this.setState({
      [name]: val  // 属性名是name的值
    })
  }

  toRegister = () => {
    this.props.history.replace('/register')
  }

  render () {
    const { msg, redirectTo } = this.props.user

    if (redirectTo) {
      return <Redirect to={redirectTo} />
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
            <Button type="primary" onClick={this.login}>登录</Button>
            <Button onClick={this.toRegister}>还没有账户</Button>
          </List>
        </WingBlank>
      </div>
    )
  }
}

export default connect(
  state => ({user: state.user}),
  {login}
)(Login)