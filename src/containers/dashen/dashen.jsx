/* 
大神主界面容器组件
 */
import React from 'react'
import { connect } from 'react-redux'

class Dashen extends React.Component {
  state = {}
  render () {
    return (
      <div>Dashen</div>
    )
  }
}
export default connect(
  state => ({}),
  {}
)(Dashen)
