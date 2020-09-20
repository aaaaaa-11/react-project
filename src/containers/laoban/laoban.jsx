/* 
老板主界面容器组件
 */
import React from 'react'
import { connect } from 'react-redux'

class LaoBan extends React.Component {
  state = {}
  render () {
    return (
      <div>LaoBan</div>
    )
  }
}
export default connect(
  state => ({}),
  {}
)(LaoBan)
