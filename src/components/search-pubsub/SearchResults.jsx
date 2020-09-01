import React from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

class SearchResults extends React.Component {

  state = {
    initView: true,
    isLoading: false,
    users: null,
    errMsg: null
  }

  componentDidMount () {
    // 订阅消息（search）
    PubSub.subscribe('search', (msg, searchName) => {
      // 更新状态（请求中）
      this.setState({
        initView: false,
        isLoading: true
      })
      // 发送请求
      const url = `https://api.github.com/search/users?q=${searchName}`
      axios.get(url)
        .then(response => {
          // 响应成功
          const results = response.data
          const users = results.items.map((item) => ({
            name: item.login,
            url: item.html_url,
            avatarurl: item.avatar_url
          }))
          this.setState({
            users,
            isLoading: false
          })
        })
        .catch(err => {
          // console.log('响应失败', err);
          this.setState({
            errMsg: err,
            isLoading: false
          })
        })
    })
  }

  render () {
    const {initView, isLoading, users, errMsg} = this.state
    if (initView) {
      return <h2>输入关键字进行搜索</h2>
    } else if (isLoading) {
      return <h2>isLoading...</h2>
    } else if (errMsg) {
      return <h2>{errMsg}</h2>
    }
    return (
      <div className="search-results">
        <ul className="search-row">
          {
            users.map((user, i) => (
              <li className="search-item" key={i}>
                <a href={user.url} className="search-url">
                  <img src={user.avatarurl} alt="img url"/>
                </a>
                <p className="search-name">{user.name}</p>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
export default SearchResults