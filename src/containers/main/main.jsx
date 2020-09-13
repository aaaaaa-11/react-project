/* 
主路由组件
 */
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DashenInfo from '../dashen-info/dashen-info'
import LaobanInfo from '../laoban-info/laoban-info'

class Main extends React.Component {
  state = {}
  render () {
    return (
      <div>
        <Switch>
          <Route path="/laobaninfo" component={LaobanInfo} />
          <Route path="/dasheninfo" component={DashenInfo} />
        </Switch>
      </div>
    )
  }
}
export default Main