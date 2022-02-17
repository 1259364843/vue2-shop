import Vue from 'vue'
// 按需加载组件
import { Button, Form, FormItem, Input, Message } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

// 挂载全局
Vue.prototype.$message = Message
