import React from 'react'

import SearchHeader from '../search/SearchHeader'
import SearchResults from '../search/SearchResults'

class App extends React.Component {
  state = {
    searchName: ''
  }

  setSearchName = (searchName) => {
    this.setState({searchName})
  }

  render () {
    const {searchName} = this.state
    return (
      <div className="search-index">
        <SearchHeader setSearchName={this.setSearchName} />
        <SearchResults searchName={searchName}/>
      </div>
    )
  }
}
export default App
