import Vue from 'vue'
import VueRouter from 'vue-router'

// 组件导入
import Login from '../components/Login.vue'
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
  }
]

// 新建路由实例对象
const router = new VueRouter({
  routes
})

// 导出路由对象
export default router
