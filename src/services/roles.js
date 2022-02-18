// 权限和角色

import request from './request'

/**
 * 1.获取角色列表
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
 * 2.添加用户角色
 * @param {roleName} 角色名称 不可为空
 * @param {roleDesc} 角色描述 可以为空
 * @returns
 */
export function addUserRoles(data) {
  const { roleName, roleDesc } = data
  return request({
    method: 'POST',
    url: 'roles',
    data: {
      roleName,
      roleDesc
    }
  })
}
/**
 * 3.获取指定角色信息
 * @param {id} 角色id
 * @returns
 */
export function getRoleById(id) {
  return request({
    method: 'GET',
    url: `roles/${id}`
  })
}
/**
 * 4.删除指定角色信息
 * @param {id} 角色id
 * @returns
 */
export function deleteRoleById(id) {
  return request({
    method: 'DELETE',
    url: `roles/${id}`
  })
}
/**
 * 5.获取全部权限列表
 * @param {type} 展示类型,列表或树状
 * @returns
 */
export function getPermissionList(type = 'list') {
  return request({
    method: 'GET',
    url: `rights/${type}`
  })
}

/**
 * 6.更新角色信息
 * @param {id} 用户id
 * @param {roleName} ⻆色名称
 * @param {roleDesc} ⻆色描述
 * @returns
 */
export function setRoleInfo(id, data) {
  const { roleName, roleDesc } = data
  return request({
    method: 'PUT',
    url: `roles/${id}`,
    data: {
      roleName,
      roleDesc
    }
  })
}
/**
 * 7.分配角色权限
 * @param {roleId} ⻆色id
 * @param {rids} 权限 ID 列表
 * @returns
 */
export function grantRolePermission(roleId, rids) {
  return request({
    method: 'POST',
    url: `roles/${roleId}/rights`,
    data: {
      rids
    }
  })
}
/**
 * 8.删除角色指定权限
 * @param {roleId} ⻆色id
 * @param {ridrightIds} 权限 ID 列表
 * @returns
 */
export function removeRolePermission(roleId, rightId) {
  return request({
    method: 'DELETE',
    url: `roles/${roleId}/rights/${rightId}`
  })
}
