<template>
  <div class="i-head">
    <!-- <slot></slot> -->
    <div class="logo"></div>
    <h1 class="title">itingkong</h1>
    <!-- <router-link to="/user" tag="div" class="user"> -->
      <div class="user">
        <i class="icon-user"></i>
      </div>
    <!-- </router-link> -->
  </div>
</template>

<script>
export default{

}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .i-head
    position relative
    height 44px
    text-align center
    color $color-theme
    .logo
      display inline-block
      width 30px
      height 30px
      bg-image('logo.png')
      vertical-align top
      margin-top 5px
    .title
      display inline-block
      line-height 44px
      font-size $font-size-large
      font-weight 700
      vertical-align top
    .user
      position: absolute
      top: 0
      right: 0
      height 100%
      width 40px
      padding 12px
      .icon-user
        display block
        width 20px
        height 20px
        bg-image('user.png')

</style>
