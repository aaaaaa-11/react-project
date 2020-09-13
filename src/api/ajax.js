/* 
发送ajax请求的函数模块
函数的返回值是promise
 */
import axios from 'axios'

export default function ajax(url, data={}, type='GET') {
  if (type === 'GET') {
    // 拼请求参数串
    let paramStr = ''
    Object.keys(data).forEach(key => paramStr + key + '=' + data[key] + '&')
    if (paramStr) {
      paramStr = paramStr.substring(0, paramStr.length - 1)
      url += + '?' + paramStr
    }
    return axios.get(url)
  } else {
    return axios.post(url, data)
  }
  
}