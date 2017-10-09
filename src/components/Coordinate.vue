<template>
  <div id="coordinate">
    <router-link to="/">トップ</router-link>
    <div class="box" ref="box" @click="onClick">
    </div>
    <b-modal title="送信ダイアログ" v-model="dialogOpen" @ok="onSubmit">
      <b-form-select v-model="selectedValue" :options="options" class="mb-3">
      </b-form-select>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'coordinate',
  data() {
    return {
      dialogOpen: false,
      clickRect: { x: 0, y: 0 },
      selectedValue: null,
      options: [
        { value: null, text: '選択してください' },
        { value: 'a', text: 'a' },
        { value: 'b', text: 'b' },
      ]
    }
  },
  methods: {
    onClick: function(e) {
      const boxRect = this.$refs.box.getBoundingClientRect()
      this.clickRect = {
        x: e.clientX - boxRect.left,
        y: e.clientY - boxRect.top,
      }
      this.dialogOpen = true
    },
    onSubmit: function(e) {
      const { clickRect, selectedValue } = this
      axios.post("/api", {
        clickRect, selectedValue
      }).then(({ data }) => {
        window.alert(data.message)
        this.clickRect = { x: 0, y: 0 }
        this.selectedValue = null
      })
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
