/* 
个人中心主界面容器组件
 */
import React from 'react'
import { connect } from 'react-redux'

class Personal extends React.Component {
  state = {}
  render () {
    return (
      <div>Personal</div>
    )
  }
}
export default connect(
  state => ({}),
  {}
)(Personal)
