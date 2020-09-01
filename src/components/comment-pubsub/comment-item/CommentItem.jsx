import React from 'react'
import Prototypes from 'prop-types'
import Pubsub from 'pubsub-js'

import './cmt-item.css'

class CommentItem extends React.Component {
  static prototypes = {
    comment: Prototypes.object.isRequired,
    index: Prototypes.number.isRequired
  }

  handleDel = () => {
    const {comment, index} = this.props
    // 提示
    if (window.confirm(`确定删除${comment.username}的评论吗？`)) {
      // 确定后删除
      Pubsub.publish('delComment', index)
    }
  }

  render () {
    const {comment} = this.props
    return (
      <div className="item">
        <h3 className="item-user">{comment.username}说：
          <span className="btn-delete" onClick={this.handleDel}>删除</span>
        </h3>
        <p className="item-content">{comment.content}</p>
      </div>
    )
  }
}
export default CommentItem