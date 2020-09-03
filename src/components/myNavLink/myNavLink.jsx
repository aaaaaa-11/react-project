import React from 'react'
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends React.Component {
  render () {
    // 将外部传入的所有属性传给NavLink
    return <NavLink {...this.props} activeClassName="active" />
  }
}