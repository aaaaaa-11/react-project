import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app/App'
import {BrowserRouter} from 'react-router-dom'

import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'

ReactDOM.render(
  (
    <BrowserRouter>
    <App />
    </BrowserRouter>
  ),
  document.getElementById('root')
)