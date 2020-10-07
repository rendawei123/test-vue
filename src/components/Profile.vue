<template>
  <div class="profile">
    <h2>我是档案</h2>
    <h3>姓名: {{name}}, 年龄: {{age}}</h3>
    
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
    }
  },
  computed: {
    // 获取url中的query参数
    name(){
      return this.$route.query.name
    },
    age(){
      return this.$route.query.age
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
