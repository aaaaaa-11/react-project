/* 
包含n个工具函数的模块
 */

/* 
用户主界面路由
  dashen: /dashen
  laoban: /laoban
用户信息完善界面路由
  dashen: /dasheninfo
  laoban: /laobaninfo
判断是否已经完善信息？根据user.header是否有值
判断用户类型：user.type
 */
export function getRedirectTo (type, header) {
  let path = '/'
  if (type === 'dashen') {
    path = '/dashen'
  } else if (type === 'laoban') {
    path = '/laoban'
  }

  if (!header) {
    path += 'info'
  }

  return path
}
