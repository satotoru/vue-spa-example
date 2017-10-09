<template>
  <div id="app">
    <app-nav :title="title" />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue"
export default {
  name: 'app',
  data() {
    return {
      title: "サンプル"
    }
  },
  components: {
    'app-nav': NavBar
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  main {
    margin-top: 50px;
  }
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
