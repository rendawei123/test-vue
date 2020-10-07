<template>
  <div class="home">
    
    <button @click="aboutClick">关于</button>
    <router-link v-bind:to="'/user/'+ userId">用户</router-link>
    <!-- 向url中传入参数 -->
    <!-- <router-link :to="{path:'/profile', query:{name:'Tom', age:18}}">档案</router-link> -->
    <button @click="profileClick">档案</button>

    <h2>我是首页</h2>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-link to="/home/data">数据</router-link>
    <router-link to="/home/echart">Echart</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      userId: "zhangsan"

    }
  },
  methods: {
    // 通过点击事件函数跳转
    homeClick(){
      this.$router.push('/home')
    },
    aboutClick(){
      this.$router.push('/about')
    },
    profileClick(){
      this.$router.push({
        path: '/profile',
        query: {name: 'Tom', age:18}
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}

.router-link-exact-active {
  color: red;
}

</style>
