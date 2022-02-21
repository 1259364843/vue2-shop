import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

// 字体图标
import './assets/fonts/iconfont.css'
// 全局样式表
import './assets/css/global.css'

// 导入树形表格插件
import TreeTable from 'vue-table-with-tree-grid'

Vue.config.productionTip = false

// 全局注册组件
Vue.component('tree-table', TreeTable)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
