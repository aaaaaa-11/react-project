import React from 'react'
import Prototypes from 'prop-types'

class SearchHeader extends React.Component {
  static prototypes = {
    setSearchName: Prototypes.func.isRequired
  }

  search = () => {
    // 获取数据
    const searchName = this.input.value.trim()
    this.props.setSearchName(searchName)
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