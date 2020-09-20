/* 
底部导航栏
 */
import React from 'react'
import Proptypes from 'prop-types'
import { TabBar } from 'antd-mobile'
const Item = TabBar.Item

class NavFooter extends React.Component {
  
  static propTypes = {
    navList: Proptypes.array.isRequired
  }
  render () {
    const {navList} = this.props
    return (
      <TabBar>
        {
          navList.map(nav => (
            <Item
              key={nav.path}
              title={nav.text}
              icon={{uri: require('')}}></Item>
          ))
        }
      </TabBar>
    )
  }
}
export default NavFooter