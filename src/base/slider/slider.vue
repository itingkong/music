<template>
  <div class="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">
      <span class="dot"></span>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
// import

export default {
  name: 'slider',
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 3000
    }
  },
  data () {
    return {
      dots: [],
      currentPageIndex: 0
    }
  },
  mounted () {
    setTimeout(() => {
      this._setSliderWidth()
      this._initDots()
      this._initSlider()

      if (this.autoPlay) {
        this._play()
      }
    }, 20)
  },
  methods: {
    _setSliderWidth () {

    },
    _initDots () {

    },
    _initSlider () {

    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
