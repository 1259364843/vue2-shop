<template>
  <div class="rights">
    <Breadcrumb name1="权限管理" name2="权限列表" />
    <!-- 卡片视图 -->
    <el-card class="box-card">
      <el-table :data="rightsList" stripe border>
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column prop="authName" label="权限名称"> </el-table-column>
        <el-table-column prop="path" label="路径"> </el-table-column>
        <el-table-column label="权限等级">
          <template v-slot="scope">
            <el-tag v-if="scope.row.level === '0'">一级</el-tag>
            <el-tag type="success" v-else-if="scope.row.level === '1'">二级</el-tag>
            <el-tag type="warning" v-else-if="scope.row.level === '2'">三级</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import Breadcrumb from '../../../components/common/breadcrumb/Breadcrumb.vue'
import {
  getPermissionList
} from '../../../services/roles'
export default {
  name: 'Rights',
  components: {
    Breadcrumb
  },
  data() {
    return {
      // 权限列表
      rightsList: []
    }
  },
  created() {
    this.getRightsList()
  },
  methods: {
    async getRightsList() {
      const res = await getPermissionList()
      if (res.meta.status !== 200) {
        return this.$message.error('获取权限列表失败!')
      }
      this.rightsList = res.data
    }
  }
}
</script>

<style lang="less" scoped></style>
