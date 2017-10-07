<template>
  <div id="coordinate">
    <router-link to="/">トップ</router-link>
    <div class="box" ref="box" @click="onClick">
    </div>
  </div>
</template>

<script>
export default {
  name: 'coordinate',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    onClick: function(e) {
      const boxRect = this.$refs.box.getBoundingClientRect()
      const clickRect = {
        x: e.clientX - boxRect.left,
        y: e.clientY - boxRect.top,
      }
    }
  }
}
</script>

<style lang="scss">
  .box {
    height: 500px;
    width: 500px;
    background-color:lightgray;
    margin: auto;
  }
</style>