// 首页

import request from './request'

// 1.获取左侧菜单数据
export function getMenus() {
  return request({
    url: 'menus'
  })
}
