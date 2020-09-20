/* 
显示指定用户列表的UI组件
 */
import React from 'react'
import Proptypes from 'prop-types'
import { WingBlank, WhiteSpace, Card } from 'antd-mobile'
const Header = Card.Header
const Body = Card.Body

class UserList extends React.Component {
  static propTypes = {
    userList: Proptypes.array.isRequired
  }
  state = {}
  render () {
    const { userList } = this.props.userList

    return (
      <WingBlank>
        {
          userList.map(user => (
            <div key={user._id}>
              <WhiteSpace>
                <Card>
                  <Header
                    thumb={require(`../../assets/img/${user.header}.png`)}
                    axtra={username} 
                  />
                  <Body>
                    <div>职位：{user.post}</div>
                    <div>公司：{user.company}</div>
                    {user.salary ? <div>月薪：{user.salary}</div> : null}
                    {user.info ? <div>描述：{user.info}</div> : null}
                  </Body>
                </Card>
              </WhiteSpace>
            </div>
          ))
        }
      </WingBlank>
    )
  }
}
export default UserList
