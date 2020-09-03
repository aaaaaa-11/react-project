import React from 'react'
import Pubsub from 'pubsub-js'

import CommentList from '../comment-pubsub/comment-list/CommentList'
import CommentAdd from '../comment-pubsub/comment-add/CommentAdd'

import './app.css'

class App extends React.Component {
  // 给组件对象指定state属性
  state = {
    comments: [
      {username: 'Tom', content: 'React Good!'},
      {username: 'Jack', content: 'React Bad!'},
    ]
  }

  componentDidMount () {
    Pubsub.subscribe('addComment', this.addComment)
    Pubsub.subscribe('delComment', this.delComment)
  }

  // 添加评论
  addComment = (msg, comment) => {
    const {comments} = this.state
    comments.unshift(comment)
    this.setState({comments})
  }

  // 删除指定评论
  delComment = (msg, i) => {
    const {comments} = this.state
    comments.splice(i, 1)
    this.setState({comments})
  }

  render () {
    const {comments} = this.state
    return (
      <div className="cmt-container">
        <h1 className="cmt-header">请发表对React的评论</h1>
        <div className="content">
          <div className="cmt-add">
            <CommentAdd/>
          </div>
          <div className="cmt-list">
            <CommentList comments={comments}/>
          </div>
        </div>
      </div>
    )
  }
}
export default App
