<template>
  <h1>Chess</h1>
  <BoardView></BoardView>
</template>
<script>
import BoardView from './views/BoardView.vue'

export default {
  components: { BoardView },
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
</style>
