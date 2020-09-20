/* 
选择用户头像的UI组件
 */
import React from 'react'
import Proptypes from 'prop-types'
import { Grid, List } from 'antd-mobile'

class HeaderSelector extends React.Component {

  constructor () {
    super()
    // 准备需要显示的数据
    this.headerList = []
    for (let i=0; i<10; i++) {
      this.headerList.push({
        icon: require(`../../assets/img/avatar${i+1}.png`),  // 不能使用import
        text: '头像' + i + 1
      })
    }
  }
  
  static propTypes = {
    setHeader: Proptypes.func.isRequired
  }
  
  state = {
    icon: null,  // 图片对象
  }

  handleClick = ({text, icon}) => {
    this.setState({icon})
    this.props.setHeader(text)
  }

  render () {
    // 头部界面
    const {icon} = this.state
    const listHeader = icon ? (
      <div>
        已选择头像: <img src={icon} alt="header"/>
      </div>
    ) : '请选择头像'
    return (
      <List renderHeader={() => listHeader}>
        <Grid data={this.headerList}
              columnNum={5}
              onClick={this.handleClick}></Grid>
      </List>
    )
  }
}

export default HeaderSelector
