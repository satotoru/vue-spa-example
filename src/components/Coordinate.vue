<template>
  <div id="coordinate">
    <div class="box" ref="box" @click="onClick">
      <img v-for="(item, index) in pinnedItems" :key="index" src="../assets/pin_icon.png" alt="pin" class="icon" :style="getIconStyle(item)">
    </div>
    <b-modal title="送信ダイアログ" v-model="dialogOpen" @ok="onSubmit">
      <b-form-select v-model="selectedValue" :options="options" class="mb-3">
      </b-form-select>
    </b-modal>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex"

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
  computed: mapState([ 'pinnedItems']),
  methods: {
    ...mapActions(['postPinnedItem']),
    getIconStyle: function(pinnedItem) {
      const width = 30;
      const height = 30;
      return {
        width: `${width}px`,
        height: `${height}px`,
        top: `${pinnedItem.y - (height / 2)}px`,
        left: `${pinnedItem.x - (width / 2)}px`,
      }
    },
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
      this.postPinnedItem({ clickRect, selectedValue })
      this.clickRect = { x: 0, y: 0 }
      this.selectedValue = null
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
    position: relative;
  }
  .icon {
    position: absolute;
  }
</style>
