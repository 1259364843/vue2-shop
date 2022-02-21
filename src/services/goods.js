// 商品相关请求

import request from './request'

/**
 * 1.获取商品分类数据
 * @param {type} 分级参数
 * @returns
 */
export function getCategories(queryInfo) {
  const { type, pagenum, pagesize } = queryInfo
  return request({
    method: 'GET',
    url: 'categories',
    params: {
      type,
      pagenum,
      pagesize
    }
  })
}
/**
 * 2.添加商品分类
 * @param {cat_pid} 分类父 ID 不可为空,如果要添加1级分类，则父分类Id应该设置为 0
 * @param {cat_name} 分类名称 不能为空
 * @param {cat_level} 分类层级 不能为空,0 表示一级分类; 1 表示二级分类; 2 表示三级分类
 * @returns
 */
export function addGoodsCate(data) {
  const { cat_pid, cat_name, cat_level } = data
  return request({
    method: 'POST',
    url: 'categories',
    data: {
      cat_pid,
      cat_name,
      cat_level
    }
  })
}
/**
 * 3.根据ID查询分类
 * @param {:id} 分类id 不能为空 携带在url中
 * @returns
 */
export function getCateById(id) {
  return request({
    method: 'GET',
    url: `categories/${id}`
  })
}

/**
 * 4.编辑提交分类
 * @param {:id} 分类id 不能为空 携带在url中
 * @param {cat_name} 分类名称 不能为空
 * @returns
 */
export function editCate(id, data) {
  const { cat_name } = data
  return request({
    method: 'PUT',
    url: `categories/${id}`,
    data: {
      cat_name
    }
  })
}

/**
 * 5.根据ID删除分类数据
 * @param {:id} 分类id 不能为空 携带在url中
 * @returns
 */
export function deleteCateById(id) {
  return request({
    method: 'DELETE',
    url: `categories/${id}`
  })
}
