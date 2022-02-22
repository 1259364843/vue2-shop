// 数据统计

import request from './request'

/**
 * 1.获取基于时间统计的折线图
 * @returns
 */
export function getReports() {
  return request({
    method: 'GET',
    url: 'reports/type/1'
  })
}
