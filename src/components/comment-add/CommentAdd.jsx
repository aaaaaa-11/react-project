import React from 'react'
import Prototypes from 'prop-types'

import './cmt-add.css'

class CommentAdd extends React.Component {
  static prototypes = {
    addComment: Prototypes.func.isRequired
  }

  state = {
    username: '',
    content: ''
  }

  handleSubmit = () => {
    // 收集数据，并封装成comment对象
    const comment = this.state
    // 更新状态
    this.props.addComment(comment);
    // 清楚输入数据
    this.setState({
      username: '',
      content: ''
    })
  }

  handleNameChange = (e) => {
    const username = e.target.value
    this.setState({username})
  }

  handleContentChange = (e) => {
    const content = e.target.value
    this.setState({content})
  }

  render () {
    const {username, content} = this.state
    return (
      <div className="cmt-add-content">
        <p className="title">用户名</p>
        <input type="text" className="cmt-input" value={username} onChange={this.handleNameChange}/>
        <p className="title">评论内容</p>
        <textarea className="cmt-content" value={content} onChange={this.handleContentChange}></textarea>
        <button
          type="button"
          className="btn-submit"
          onClick={this.handleSubmit}
        >提交</button>
      </div>
    )
  }
}
export default CommentAdd