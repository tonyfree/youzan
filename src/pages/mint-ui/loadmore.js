import Vue from 'vue'
import { InfiniteScroll, Spinner } from 'mint-ui'
Vue.use(InfiniteScroll)
Vue.component(Spinner.name, Spinner)

new Vue({
  el: '#app',
  data: {
    list: [],
    loading: true
  },
  created() {
    setTimeout(() => {
      for (let index = 1; index <= 10; index++) {
        this.list.push(index)
      }
      this.loading = false
    }, 2000)
  },
  methods: {
    loadMore() {
      this.loading = true
      setTimeout(() => {
        let last = this.list[this.list.length - 1]
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i)
        }
        this.loading = false
      }, 2500)
    }
  }
})