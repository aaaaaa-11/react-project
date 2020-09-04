import React from 'react'
import {Button, Toast} from 'antd-mobile'

import './app.css'

class App extends React.Component {

  submit = () => {
    Toast.info('提交成功', .3)
  }

  render () {
    return (
      <div className="cmt-container">
        <Button type="primary" onClick={this.submit}>Start</Button>
      </div>
    )
  }
}
export default App
