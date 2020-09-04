import React from 'react'
import CommentItem from '../comment-item/CommentItem'
import Prototypes from 'prop-types' 

class CommentList extends React.Component {
  // 给组件类指定属性
  static propTypes = {
    comments: Prototypes.array.isRequired
  }

  render () {
    const {comments} = this.props
    const display = comments.length === 0 ? "block" : "none"
    return (
      <div>
        <h2>评论回复：</h2>
        <p style={{display}}>暂无评论，赶快来添加第一条评论吧！</p>
        {
          comments.map((comment, i) => <CommentItem key={i} index={i} comment={comment} />)
        }
      </div>
    )
  }
}

// CommentList.prototypes = {
//   comments: Prototypes.array.isRequired
// }
export default CommentList