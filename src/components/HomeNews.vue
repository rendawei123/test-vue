<template>
  <div class="homeNews">
    <h1>{{title}}</h1>
    <p>{{content}}</p>
    
  </div>
</template>

<script>
  import {request} from '@/network/request'

  export default {
    name: 'HomeNews',
    data () {
      return {
        title: '',
        content: '',
        id: '1'
      }
    },
    created(){
      request({
        url: 'news'
      }).then(res => {
        this.title = res.data.title;
        this.content = res.data.content;
        this.id = res.data.id
      }).catch(err => {
        console.log(err)
      })
    }
  }

  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}

</style>
