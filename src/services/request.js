import axios from 'axios'
// 导入NProgress 对应的js和css
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 导入配置参数
import { BASE_URL, TIMEOUT } from './config'

// 创建实例对象
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})

// 请求拦截器
instance.interceptors.request.use((config) => {
  // 1.发送网络请求时, 在界面的中间位置显示Loading的组件
  // 显示进度条
  NProgress.start()
  // 2.某一些请求要求用户必须携带token, 如果没有携带, 那么直接跳转到登录页面
  // 登录授权 请求验证是否有token  需要授权的 API ，必须在请求头中使用 `Authorization` 字段提供 `token` 令牌
  const token = window.sessionStorage.getItem('token')
  if (token) {
    config.headers.Authorization = token
  }
  // 3.params/data序列化的操作
  // 必须返回否则没有值
  return config
})

instance.interceptors.response.use(
  (res) => {
    NProgress.done()
    return res.data
  },
  (err) => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          break
        case 401:
          break
        default:
      }
    }
    return err
  }
)

export default instance
