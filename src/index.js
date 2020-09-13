// 入口js文件
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import Register from './containers/register/register'
import Login from './containers/login/login'
import Main from './containers/main/main'

import store from './redux/store'

import './assets/css/index.less'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/Register" component={Register} />
        <Route path="/login" component={Login} />
        <Route component={Main} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)