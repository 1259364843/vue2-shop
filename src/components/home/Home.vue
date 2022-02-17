<!--  -->
<template>
  <div class="">
    <el-button type="danger" @click="logout">退出</el-button>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {}
  },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>
<style lang='css' scoped>
</style>
