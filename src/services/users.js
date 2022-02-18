// 用户列表

import request from './request'

/**
 * 1.获取管理员用户列表
 * @param {*} queryInfo 查询参数
 * pagenum 当前⻚码 不可空
 * pagesize 每页条数 不可空
 * @returns
 */
export function getUserList(queryInfo) {
  const { query, pagenum, pagesize } = queryInfo
  return request({
    method: 'GET',
    url: 'users',
    params: {
      query,
      pagenum,
      pagesize
    }
  })
}
/**
 * 2.新增用户数据
 * @param {*} queryInfo
 * 用户名和密码必须,其余可为空
 * @returns
 */
export function addUser(userInfo) {
  const { username, password, email, mobile } = userInfo
  return request({
    method: 'POST',
    url: 'users',
    data: {
      username,
      password,
      email,
      mobile
    }
  })
}

/**
 * 3.更改用户状态
 * @param {*} userInfo 用户信息
 * @returns
 */
export function changeUserState(userInfo) {
  const uId = userInfo.id
  const type = userInfo.mg_state
  return request({
    method: 'PUT',
    url: `users/${uId}/state/${type}`
  })
}
/**
 * 4.根据id获取用户信息
 * id 携带在url中
 * @param {*} userInfo 用户信息
 * @returns
 */
export function getUserInfoById(id) {
  return request({
    method: 'get',
    url: `users/${id}`
  })
}

/**
 * 5.更新用户信息
 * @param {*} userInfo 用户信息
 * @returns
 */
export function updateUser(userInfo) {
  const { id, email, mobile } = userInfo
  return request({
    method: 'PUT',
    url: `users/${id}`,
    data: {
      email,
      mobile
    }
  })
}
/**
 * 6.删除单个用户
 * @param {id} 用户id
 * @returns
 */
export function deleteUser(id) {
  return request({
    method: 'DELETE',
    url: `users/${id}`
  })
}
/**
 * 7.获取角色列表
 * 不需要参数
 * @returns
 */
export function getRolesList() {
  return request({
    method: 'GET',
    url: 'roles'
  })
}
/**
 * 8.设置用户角色
 * @param {id} 用户id
 * @param {rid} 角色id
 * @returns
 */
export function setUserRoles(id, rid) {
  return request({
    method: 'PUT',
    url: `users/${id}/role`,
    data: {
      rid
    }
  })
}
