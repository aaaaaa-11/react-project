import React from 'react'
import Proptypes from 'prop-types'
import { connect } from 'react-redux'

import CommentList from '../components/comment-list/CommentList'
import CommentAdd from '../components/comment-add/CommentAdd'
import '../components/app/app.css'
import { addComment, delComment, getComments } from '../redux/actions'

class App extends React.Component {
  static propTypes = {
    comments: Proptypes.array.isRequired,
    addComment: Proptypes.func.isRequired,
    delComment: Proptypes.func.isRequired,
    getComments: Proptypes.func.isRequired
  }

  componentDidMount () {
    // 异步获取评论数据
    this.props.getComments()
  }

  render () {
    const {comments, addComment, delComment} = this.props
    return (
      <div className="cmt-container">
        <h1 className="cmt-header">请发表对React的评论</h1>
        <div className="content">
          <div className="cmt-add">
            <CommentAdd addComment={addComment}/>
          </div>
          <div className="cmt-list">
            <CommentList comments={comments} delComment={delComment}/>
          </div>
        </div>
      </div>
    )
  }
}
export default connect(
  state => ({comments: state.comments}),  // state就是一个comments
  { addComment, delComment, getComments}
)(App)
