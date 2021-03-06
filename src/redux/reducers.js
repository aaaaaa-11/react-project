// 包含n个reducer函数：根据老的state和指定的action返回新的sate
import { combineReducers } from 'redux'
import {
  AUTH_SUCCESS,
  ERROR_MSG,
  RESET_USER,
  RESIVE_USER
} from './action-type';

import {getRedirectTo} from '../utils'

const initUser = {
  username: '',  // 用户名
  type: '',  // 用户类型 dashen/laoban
  msg: '',  // 错误提示信息
  redirectTo: ''  // 需要自动重定向的路由路径
}

// 产生user状态的reducer
function user (state=initUser, action) {
  switch (action.type) {
    case AUTH_SUCCESS:  // data是user
      const {type, header} = action.data
      return {...action.data, redirectTo: getRedirectTo(type, header)};
    case ERROR_MSG:  // data是msg
      return {...state, msg: action.data}
    case RESIVE_USER:
      return action.data
    case RESET_USER:
      return {...initUser, msg: action.data}
    default:
      return state;
  }
}

// 向外暴露的状态结构： { user: {} }
export default combineReducers({
  user
})
