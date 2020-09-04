import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app/App'
import {BrowserRouter} from 'react-router-dom'
import store from './redux/store';

import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'

function render () {
  ReactDOM.render(
    (
      <BrowserRouter>
        <App store={store} />
      </BrowserRouter>
    ),
    document.getElementById('root')
  )
}
// 初始化渲染
render()

// 订阅监听（store中的状态变化了，就会自动调用进行重绘）
store.subscribe(render)