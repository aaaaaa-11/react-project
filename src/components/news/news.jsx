import React, {Component} from 'react'

export default class News extends Component {
  state = {
    newsArr: [
      'news001',
      'news002',
      'news003',
      'news004',
    ]
  }
  render () {
    return (
      <ul className="news-container">
        {
          this.state.newsArr.map((news, i) => (
            <li className="news-item" key={i}>{news}</li>
          ))
        }
      </ul>
    )
  }
}