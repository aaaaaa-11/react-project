import { INCREMENT, DECREMENT } from "./action-types";

/* 
  包含所有的 action creator
  同步的action都返回一个对象
  异步的action返回的是一个函数 
*/
export const increment = (num) => ({type: INCREMENT, data: num})

export const decrement = (num) => ({type: DECREMENT, data: num})

// 异步的action
export const incrementAsync = (num) => {
  return dispatch => {
    // 异步的代码
    setTimeout(() => {
      // 1s之后才分发一个增加的action
      dispatch(increment(num))
    }, 1000)
  }
}