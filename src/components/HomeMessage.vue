<template>
  <div class="homeMessage">
    <ul>
      <li v-for="message in messages" :key="message">{{message}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeMessage',
  data () {
    return {
      messages: [
        '小明发送来的消息', '小红发送来的消息', '小明回复的消息'
      ]
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
