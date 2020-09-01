import React from 'react'
import Pubsub from 'pubsub-js'

class SearchHeader extends React.Component {

  search = () => {
    // 获取数据
    const searchName = this.input.value.trim()
    if (searchName) {
      // 发布消息（search）
      Pubsub.publish('search', searchName)
    }
  }

  render () {
    return (
      <div>
        <p>Search name</p>
        <input type="text" ref={(input) => this.input = input}/>
        <button onClick={this.search}>Search</button>
      </div>
    )
  }
}
export default SearchHeader