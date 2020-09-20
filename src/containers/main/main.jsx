/* 
主路由组件
 */
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Cookies from 'js-cookie'  // 可以操作前端cookie的对象
import { NavBar } from 'antd-mobile'

import DashenInfo from '../dashen-info/dashen-info'
import LaobanInfo from '../laoban-info/laoban-info'
import Dashen from '../dashen/dashen'
import Laoban from '../laoban/laoban'
import Message from '../message/message'
import Personal from '../personal/persaonal'
import NotFound from '../../components/not-fond/not-fond'
import NavFooter from '../../components/nav-footer/nav-footer'

import { getUser } from '../../redux/actions'
import { getRedirectTo } from '../../utils'

class Main extends React.Component {

  // 给组件对象添加属性
  navList = [ // 包含所有导航组件的相关信息数据
    {
      path: '/laoban', // 路由路径
      component: Laoban,
      title: '大神列表',
      icon: 'dashen',
      text: '大神'
    },
    {
      path: '/dashen', // 路由路径
      component: Dashen,
      title: '老板列表',
      icon: 'laoban',
      text: '老板'
    },
    {
      path: '/message', // 路由路径
      component: Message,
      title: '消息列表',
      icon: 'message',
      text: '聊天'
    },
    {
      path: '/personal', // 路由路径
      component: Personal,
      title: '个人中心',
      icon: 'personal',
      text: ''
    },
  ]
  
  componentDidMount () {
    // 如果曾经登陆过（cookie中有userid），当前还没有登录（redux管理的user中没有_id），发请求获取对应的user
    const userid = Cookies.get('userid')
    const {_id} = this.props.user
    if (userid && !_id) {
      // 发送异步请求，获取user
      this.props.getUser()
    }
  }

  render () {
    // 读取cookie中的userid，没有自动重定向到Login
    // 如果有，读取redux中的user状态
    // 如果user没有_id，返回null（不做任何操作）
    const userid = Cookies.get('userid')
    if (!userid) {
      return <Redirect to="/login" />
    }
    const {user} = this.props
    debugger
    if (!user._id) {
      return null
    } else {
      // 如果有_id，显示对应的界面
      // 如果请求根路径，根据user的type和header来计算出一个重定向的路由路径，并自动重定向
      let path = this.props.location.pathname
      if (path === '/') {
        path = getRedirectTo(user.type, user.header)
        return <Redirect to={path}/>
      }
    }

    /* // 检查用户是否登录，如果没有，自动重定向到登录页面
    const {user} = this.props
    if (!user._id) {
      return <Redirect to='/login'/>
    } */
    const {navList} = this
    const path = this.props.location.pathname  // 请求路径
    const currentNav = navList.find(nav => nav.path === path)  // 得到当前的nav，可能没有

    return (
      <div>
        { currentNav ? <NavBar>{currentNav.title}</NavBar> : null }
        <Switch>
          {
            navList.map(nav => <Route path={nav.path} component={nav.component}/>)
          }
          <Route path="/laobaninfo" component={LaobanInfo} />
          <Route path="/dasheninfo" component={DashenInfo} />
          <Route component={NotFound}/>
        </Switch>
        { currentNav ? <NavFooter navList={navList}/> : null }
      </div>
    )
  }
}
export default connect(
  state => ({user: state.user}),
  { getUser }
)(Main)

/* 
1. 实现自动登录：
  1） 如果曾经登陆过（cookie中有userid），当前还没有登录（redux管理的user中没有_id），发请求获取对应的user：componentDidMount
2. render
  2） 如果cookie中没有userid，自动进入Login界面
  3） 判断redux管理的user中是否有_id，如果没有，暂时不做任何显示
  4） 如果有，说明当前已登录，显示对应界面
  5） 如果请求根路径，根据user的type和header来计算出一个重定向的路由路径，并自动重定向
 */