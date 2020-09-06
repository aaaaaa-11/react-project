import {combineReducers} from 'redux'
import { ADD_COMMENT, DEL_COMMENT, RECEIVE_COMMENTS } from "./action-types";
import { INCREMENT, DECREMENT } from './action-types'

const initComments = [
]

function counter (state = 0, action) {
switch (action.type) {
  case INCREMENT:
    return state + action.data
  case DECREMENT:
    return state - action.data
  default:
    return state
}
}

// 包含n个reducer函数（根据老的state和action返回新的action）
function comments (state = initComments, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [action.data, ...state]
    case DEL_COMMENT:
      return state.filter((comment, index) => index !== action.data)
    case RECEIVE_COMMENTS:
      return action.data
    default:
      return state
  }
}

export default combineReducers({
  counter, // 指定reducer对应属性
  comments
})

// redux向外暴露的是个对象：
// { counter: 0, comments: [] }