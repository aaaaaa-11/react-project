import { ADD_COMMENT, DEL_COMMENT, RECEIVE_COMMENTS } from "./action-types";

// 包含了所有action creator（action的工厂函数）
export const addComment = (comment) => ({type: ADD_COMMENT, data: comment})

export const delComment = (index) => ({type: DEL_COMMENT, data: index})

// 同步接收comments
const receiveComments = (comments) => ({type: RECEIVE_COMMENTS, data: comments}) 

// 异步从后台获取数据
export const getComments = () => {
  return dispatch => {
    setTimeout(() => {
      const comments = [
        {username: 'Tom', content: 'React Good!'},
        {username: 'Jack', content: 'React Bad!'}
       ]
      //  分发一个同步的action
       dispatch(receiveComments(comments))
    }, 1000)
  }
}