import React from 'react'
import MyNavLink from '../../components/myNavLink/myNavLink'
import { Route, Switch, Redirect } from 'react-router-dom'
import News from '../../components/news/news'
import Message from '../../components/message/message'

export default class Home extends React.Component {
  render () {
    return (
      <div className="home-container">
        <h2 className="home-title">Home 组件内容</h2>
        <div className="home-content">
          <ul>
            <li>
              <MyNavLink to="/home/news">news</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message">messages</MyNavLink>
            </li>
          </ul>
          <Switch>
            <Route path="/home/news" component={News}/>
            <Route path="/home/message" component={Message}/>
            <Redirect to="/home/news"/>
          </Switch>
        </div>
      </div>
    )
  }
}