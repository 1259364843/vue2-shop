// 登录请求

import request from './request'

// 1.用户登录
export function userLogin(data) {
  const { username, password } = data
  return request({
    url: 'login',
    params: {
      username,
      password
    }
  })
}
