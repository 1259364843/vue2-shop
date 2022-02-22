// 商品相关请求

import request from './request'

/**
 * 1.获取商品分类数据
 * @param {type} 分级参数 值:1，2，3 分别表示显示一层二层三层分类列表 【可选参数】如果不传递，则默认获取所有级别的分类
 * @param {pagenum} 当前⻚码值 【可选参数】如果不传递，则默认获取所有分类
 * @param {pagesize} 每⻚显示多少条数据 【可选参数】如果不传递，则默认获取所有分类
 * @returns
 */
export function getCategories(
  queryInfo = { type: '', pagenum: '', pagesize: '' }
) {
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

/**
 * 6.根据ID获取分类参数列表
 * @param {:id} 分类id 不能为空 携带在url中
 * @param {sel} [only,many] 不能为空,通过 only 或 many 来获取分类静态参数还是动态参数
 * @returns
 */
export function getCateParamList(id, params) {
  const { sel } = params
  return request({
    method: 'GET',
    url: `categories/${id}/attributes`,
    params: {
      sel
    }
  })
}

/**
 * 7.添加动态参数或者静态属性
 * @param {:id} 分类id 不能为空 携带在url中
 * @param {attr_name} 参数名称 不能为空
 * @param {attr_sel} [only,many] 不能为空
 * @param {attr_vals} 如果是 many 就需要填写值的选项，以逗号分隔 可选
 * @returns
 */
export function addCateParam(id, data) {
  const { attr_name, attr_sel, attr_vals } = data
  return request({
    method: 'POST',
    url: `categories/${id}/attributes`,
    data: {
      attr_name,
      attr_sel,
      attr_vals
    }
  })
}

/**
 * 8.根据id查询参数
 * @param {:id} 分类id 不能为空 携带在url中
 * @param {:attrId} 属性id 不能为空 携带在url中
 * @param {attr_sel} [only,many] 不能为空
 * @param {attr_vals} 如果是 many 就需要填写值的选项，以逗号分隔 可选
 * @returns
 */
export function getParamById(id, attrId, params) {
  const { attr_sel, attr_vals = '' } = params
  return request({
    method: 'GET',
    url: `categories/${id}/attributes/${attrId}`,
    params: {
      attr_sel,
      attr_vals
    }
  })
}
/**
 * 9.更新编辑提交参数
 * @param {:id} 分类id 不能为空 携带在url中
 * @param {:attrId} 属性id 不能为空 携带在url中
 * @param {attr_sel} [only,many] 不能为空
 * @param {attr_vals} 参数的属性值  可选参数，携带在 请求体 中
 * @returns
 */
export function updateParamById(id, attrId, data) {
  console.log(data, '11323')
  const { attr_name, attr_sel, attr_vals = '' } = data
  return request({
    method: 'PUT',
    url: `categories/${id}/attributes/${attrId}`,
    data: {
      attr_name,
      attr_sel,
      attr_vals
    }
  })
}
/**
 * 10.删除参数
 * @param {:id} 分类id 不能为空 携带在url中
 * @param {:attrId} 属性id 不能为空 携带在url中
 * @returns
 */
export function deleteParamById(id, attrId) {
  return request({
    method: 'DELETE',
    url: `categories/${id}/attributes/${attrId}`
  })
}

/**
 * 11.商品列表数据
 * @param {:id} 分类id 不能为空 携带在url中
 * @param {:attrId} 属性id 不能为空 携带在url中
 * @returns
 */
export function getGoodsList(queryInfo) {
  const { query = '', pagenum, pagesize } = queryInfo
  return request({
    method: 'GET',
    url: 'goods',
    params: {
      query,
      pagenum,
      pagesize
    }
  })
}

/**
 * 11.商品列表数据
 * @param {:id} 分类id 不能为空 携带在url中
 * @param {:attrId} 属性id 不能为空 携带在url中
 * @returns
 */
export function deleteGoodById(id) {
  return request({
    method: 'DELETE',
    url: `goods/${id}`
  })
}

/**
 * 12.添加商品
 * @returns
 */
export function addGood(data) {
  const {
    goods_name,
    goods_cat,
    goods_price,
    goods_number,
    goods_weight,
    goods_introduce,
    pics,
    attrs
  } = data
  return request({
    method: 'POST',
    url: 'goods',
    data: {
      goods_name,
      goods_cat,
      goods_price,
      goods_number,
      goods_weight,
      goods_introduce,
      pics,
      attrs
    }
  })
}
