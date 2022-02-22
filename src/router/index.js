import Vue from 'vue'
import VueRouter from 'vue-router'

// 组件导入
import Login from '../components/Login.vue'
import Home from '../views/home/Home.vue'

import Welcome from '../views/home/welcome/Welcome.vue'
import UserList from '../views/home/users/UserList.vue'
import RolesList from '../views/home/PermissionsManagement/RolesList.vue'
import RightsList from '../views/home/PermissionsManagement/RightsList.vue'
import Cate from '../views/home/goods/Cate.vue'
import Params from '../views/home/goods/Params.vue'
import GoodsList from '../views/home/goods/list/List.vue'
import Add from '../views/home/goods/list/children/Add.vue'
import OrderList from '../views/home/order/Order.vue'
import Report from '../views/home/report/Report.vue'

Vue.use(VueRouter)

// 路由规则
const routes = [
  // 重定向规则
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home/welcome',
        component: Welcome
      },
      {
        path: '/home/users',
        component: UserList
      },
      {
        path: '/home/roles',
        component: RolesList
      },
      {
        path: '/home/rights',
        component: RightsList
      },
      {
        path: '/home/categories',
        component: Cate
      },
      {
        path: '/home/params',
        component: Params
      },
      {
        path: '/home/goods',
        component: GoodsList
      },
      {
        path: '/home/goods/add',
        component: Add
      },
      {
        path: '/home/orders',
        component: OrderList
      },
      {
        path: '/home/reports',
        component: Report
      }
    ]
  }
]

// 新建路由实例对象
const router = new VueRouter({
  routes
})

// 路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将访问哪一个路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数,表示放行
  //   next() 放行 next('/login') 强制跳转
  if (to.path === '/login') return next()
  // 获取token
  const token = window.sessionStorage.getItem('token')
  if (!token) return next('/login')
  next()
})
// 导出路由对象
export default router
