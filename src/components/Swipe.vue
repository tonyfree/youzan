<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swp-page swiper-slide" v-for="list in lists">
        <a class="js-no-follow" :href="list.clickUrl">
          <img class="goods-main-photo fadeIn" :src="list.image">
        </a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
// swiper对dom节点进行操作的，dom节点什么生成？mounted
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

export default {
  // props: ['lists'],
  props: {
    lists: {
      type: Array,
      required: true
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      new Swiper('.swiper-container', {
        loop: true,
        pagination: '.swiper-pagination'
      })
    }
  }
}
</script>

<style>
.swiper-slide img {
  width: 100%;
  height: 100%;
}
</style>
