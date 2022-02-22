import Vue from 'vue'
import VueRouter from 'vue-router'

// 组件导入
const Login = () => import(/* webpackChunkName: "login_home_welome" */ 'components/Login.vue')
const Home = () => import(/* webpackChunkName: "login_home_welome" */ 'views/home/Home.vue')
const Welcome = () => import(/* webpackChunkName: "login_home_welome" */ 'views/home/welcome/Welcome.vue')
const UserList = () => import(/* webpackChunkName: "login_home_welome" */ 'views/home/users/UserList.vue')
const RolesList = () => import(/* webpackChunkName: "login_home_welome" */ 'views/home/PermissionsManagement/RolesList.vue')
const RightsList = () => import(/* webpackChunkName: "login_home_welome" */ 'views/home/PermissionsManagement/RightsList.vue')
const Cate = () => import(/* webpackChunkName: "login_home_welome" */ 'views/home/goods/Cate.vue')
const Params = () => import(/* webpackChunkName: "login_home_welome" */ 'views/home/goods/Params.vue')
const GoodsList = () => import(/* webpackChunkName: "login_home_welome" */ 'views/home/goods/list/List.vue')
const Add = () => import(/* webpackChunkName: "login_home_welome" */ 'views/home/goods/list/children/Add.vue')
const OrderList = () => import(/* webpackChunkName: "login_home_welome" */ 'views/home/order/Order.vue')
const Report = () => import(/* webpackChunkName: "login_home_welome" */ 'views/home/report/Report.vue')

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
