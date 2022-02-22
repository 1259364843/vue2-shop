// 订单管理

import request from './request'

/**
 * 1.获取订单数据
 * @returns
 */
export function getOrderList(queryInfo) {
  const {
    query,
    pagenum,
    pagesize,
    user_id,
    pay_status,
    is_send,
    order_fapiao_title,
    order_fapiao_company,
    order_fapiao_content,
    consignee_addr
  } = queryInfo
  return request({
    method: 'GET',
    url: 'orders',
    params: {
      query,
      pagenum,
      pagesize,
      user_id,
      pay_status,
      is_send,
      order_fapiao_title,
      order_fapiao_company,
      order_fapiao_content,
      consignee_addr
    }
  })
}
/**
 * 2.查询物流信息
 * @returns
 */
export function getDeliveryInfo(id = '1106975712662') {
  return request({
    method: 'GET',
    url: `/kuaidi/${id}`
  })
}
