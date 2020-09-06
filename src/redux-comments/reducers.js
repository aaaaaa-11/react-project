import { ADD_COMMENT, DEL_COMMENT, RECEIVE_COMMENTS } from "./action-types";

 const initComments = [
 ]

// 包含n个reducer函数（根据老的state和action返回新的action）
export function comments (state = initComments, action) {
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