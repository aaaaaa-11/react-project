import React from 'react'

import SearchHeader from '../search-pubsub/SearchHeader'
import SearchResults from '../search-pubsub/SearchResults'

class App extends React.Component {

  render () {
    return (
      <div className="search-index">
        <SearchHeader/>
        <SearchResults/>
      </div>
    )
  }
}
export default App
