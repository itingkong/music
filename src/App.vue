<template>
  <div id="app" @touchmove.prevent>
    <i-head></i-head>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import IHead from 'components/i-head/i-head'
import Tab from 'components/tab/tab'

import 'common/stylus/reset.styl'
export default {
  components: {
    IHead,
    Tab
  }
}
</script>

<style lang="stylus" rel="stylesheet" scoped>
@import "~common/stylus/reset"
@import "~common/stylus/variable"
@import "~common/stylus/mixin"

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: $color-background;
  color: $color-text-ll
}
</style>
