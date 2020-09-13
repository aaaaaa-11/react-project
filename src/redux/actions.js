/* 包含n个action creator
同步action
异步action
 */
import {
  reqRegister,
  reqLogin,
  reqUpdateUser
} from '../api'
import {
  AUTH_SUCCESS,
  ERROR_MSG,
  RESET_USER,
  RESIVE_USER
} from './action-type'

// 授权成功的同步action
const authSuccess = (user) => ({type: AUTH_SUCCESS, data: user})
// 错误提示信息的同步acton
const errMsg = (msg) => ({type: ERROR_MSG, data: msg})

const resiveUser = (user) => ({type: RESIVE_USER, data: user})

const resetUser = (msg) => ({type: RESET_USER, data: msg})

// 注册异步action
export const register = (user) => {
  const {username, password, password2} = user

  // 做表单的前台验证，如果不通过，分发一个errorMsg的同步action
  if (!username) {
    return errMsg('请填写用户名')
  }
  if (password !== password2) {
    return errMsg('2次密码要一致')
  } 

  // 表单数据合法，返回一个ajax请求的异步action
  return async dispatch => {
    
    // 发送注册的异步请求
    // const promise = reqRegister(user)
    // promise.then(response => {
    //   const result = response.data  // { code: 0/1, data/msg }
    // })

    const response = await reqRegister(user)
    const result = response.data
    if (result.code === 0) {
      // 分发成功的action
      dispatch(authSuccess(result.data))
    } else { // 失败
      dispatch(errMsg(result.msg))
    }
  }
}

// 登录异步action
export const login = (user) => {
  const {username, password} = user

  // 做表单的前台验证，如果不通过，分发一个errorMsg的同步action
  if (!username) {
    return errMsg('请填写用户名')
  }
  if (!password) {
    return errMsg('请填写密码')
  }

  return async dispatch => {
    const response = await reqLogin(user)
    const result = response.data
    if (result.code === 0) {
      dispatch(authSuccess(result.data))
    } else {
      dispatch(errMsg(result.msg))
    }
  }
}

// 更新用户异步action
export const updateUser = (user) => {
  return async dispatch => {
    const response = await reqUpdateUser(user)
    const result = response.data
    if (result.code === 0) {
      dispatch(resiveUser(result.data))
    } else {
      dispatch(resetUser(result.msg))
    }
  }
}

