<template>
  <div class="homeData">
    <h1>数据展示</h1>
    <h5 v-for="n in sensorDataList" :key="n">{{n}}</h5>
  </div>

  
</template>

<script>
  import {request} from '@/network/request'

  export default {
    name: 'HomeData',
    data () {
      return {
        sensorDataList:[]
      }
    },
    created(){
      this.timer = setInterval(() => {

        //在这里实现事件
        request({
          url: 'data',
        }).then(res => {
          this.sensorDataList = res.data.sensorDataList
          console.log(this.sensorDataList)
          // this.$router.go(1)
        }).catch(err => {
          console.log(err)
        })

      },1000)
    },
    destroyed(){
      clearInterval(this.timer)
    },
    
  }

  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}

</style>
