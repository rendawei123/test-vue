<template>
  <div class="user">
    <h2>我是用户界面</h2>
    <div>{{userId}}</div>
    
    
    
  </div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
    }
  },
  computed: {
    userId(){
      return this.$route.params.userId  // $route 表示哪个路由处于活跃状态，就拿到那个路由
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}

</style>
