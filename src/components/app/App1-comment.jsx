import React from 'react'
import CommentList from '../comment-list/CommentList'
import CommentAdd from '../comment-add/CommentAdd'
import './app.css'

class App extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     comments: [
  //       {username: 'Tom', content: 'React Good!'},
  //       {username: 'Jack', content: 'React Bad!'},
  //     ]
  //   }
  // }
  // 给组件对象指定state属性
  state = {
    comments: [
      {username: 'Tom', content: 'React Good!'},
      {username: 'Jack', content: 'React Bad!'},
    ]
  }

  // 添加评论
  addComment = (comment) => {
    const {comments} = this.state
    comments.unshift(comment)
    this.setState({comments})
  }

  // 删除指定评论
  delComment = (i) => {
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
            <CommentAdd addComment={this.addComment}/>
          </div>
          <div className="cmt-list">
            <CommentList comments={comments} delComment={this.delComment}/>
          </div>
        </div>
      </div>
    )
  }
}
export default App
