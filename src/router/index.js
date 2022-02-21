import Vue from 'vue'
import VueRouter from 'vue-router'

// 组件导入
import Login from '../components/Login.vue'
import Home from '../views/home/Home.vue'

import UserList from '../views/home/users/UserList.vue'
import RolesList from '../views/home/PermissionsManagement/RolesList.vue'
import RightsList from '../views/home/PermissionsManagement/RightsList.vue'
import Cate from '../views/home/goods/Cate.vue'
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
