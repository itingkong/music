<template>
  <div class="i-tab">
    <router-link to="/recommend" class="tab-item" tag="div">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link to="/singer" class="tab-item" tag="div">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link to="/rank" class="tab-item" tag="div">
      <span class="tab-link">排行</span>
    </router-link>
    <router-link to="/search" class="tab-item" tag="div">
      <span class="tab-link">搜索</span>
    </router-link>
  </div>
</template>

<script>
export default{}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
  .i-tab
    display flex
    height 44px
    line-height 44px
    font-size $font-size-medium
    .tab-item
      flex 1
      text-align cneter
      color $color-text-ll
      .tab-link
        padding-bottom 5px
      &.router-link-active
        .tab-link
          border-bottom 2px solid $color-theme
</style>
