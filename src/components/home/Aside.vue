<template>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '61px' : '200px'">
        <div class="toggle-button" @click="toggleCollpase">|||</div>
        <!-- 侧边栏菜单区域 -->
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409EFF"
          :unique-opened="true"
          :collapse="isCollapse"
          :collapse-transition="false"
          :router="true"
          :default-active="activePath"
        >
          <!-- 一级菜单 -->
          <el-submenu :index="item.id + ''" v-for="item in menuList" :key="item.id">
            <!-- 一级菜单的模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i :class="iconsObj[item.id]"></i>
              <!-- 文本 -->
              <span>{{ item.authName }}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item :index="'/home/' + sunItem.path" v-for="sunItem in item.children" :key="sunItem.id" @click="saveActivePath('/home/' + sunItem.path)">
              <template slot="title">
                <!-- 二级菜单的模板区域 -->
                <i class="el-icon-menu"></i>
                <!-- 图标 -->
                <span>{{ sunItem.authName }}</span>
                <!-- 文本 -->
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
</template>

<script>
import { getMenus } from '../../services/home'
export default {
  name: 'Aside',
  data() {
    return {
      // 左侧菜单数据
      menuList: [],
      iconsObj: {
        // 一级菜单的icon图标
        147: 'el-icon-magic-stick',
        125: 'iconfont icon-users',
        103: 'iconfont icon-tijikongjian',
        101: 'iconfont icon-shangpin',
        102: 'iconfont icon-danju',
        145: 'iconfont icon-baobiao'
      },
      isCollapse: false, // 是否折叠属性
      activePath: '',
      welcome: {
        authName: '欢迎光临',
        id: 147,
        order: 1,
        path: '/welcome',
        children: [
          {
            authName: 'Welcome',
            id: 124,
            order: 1,
            path: 'welcome',
            children: []
          }
        ]
      }
    }
  },
  created() {
    this.getMenuList()
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods: {
    // 获取所有的菜单
    async getMenuList() {
      const res = await getMenus()
      if (res && res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.$message.success({
        message: res.meta.msg,
        center: true
      })
      res.data.unshift(this.welcome)
      this.menuList = res.data
    },
    // 点击按钮,切换菜单的折叠和展开
    toggleCollpase() {
      this.isCollapse = !this.isCollapse
    },
    saveActivePath(activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    }
  }
}
</script>

<style lang="less" scoped>
.hwelcome {
  color: #fff;
  font-size: 15px;
  height: 25px;
  text-align: center;
  background: green;
  span {
    margin-left: 10px;
  }
}
.el-aside {
  background-color: #333744;
  .el-menu {
    border-right: none;
  }
}
.iconfont {
  padding-right: 10px;
}
.toggle-button {
  background: #4a5064;
  font-size: 10px;
  text-align: center;
  line-height: 24px;
  color: #fff;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
