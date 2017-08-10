import Vue from 'vue'
import { Loadmore } from 'mint-ui'
Vue.component(Loadmore.name, Loadmore)

new Vue({
  el: '#app',
  data: {
    allLoaded: false
  },
  methods: {
    loadTop() {
      // 加载更多数据
      this.$refs.loadmore.onTopLoaded()
    },
    loadBottom() {
      // 加载更多数据
      // this.allLoaded = true;// 若数据已全部获取完毕
      this.$refs.loadmore.onBottomLoaded()
    }
  }
})