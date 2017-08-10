import 'css/common.css'
import './index.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'

import { Loadmore } from 'mint-ui'
Vue.component(Loadmore.name, Loadmore)

new Vue({
  el: '.container',
  data: {
    lists: null,
    allLoaded: false
  },
  created() {
    this.getLists()
  },
  methods: {
    getLists() {
      axios.post(url.hotLists).then(res => {
        this.lists = res.data.lists
      })
    },
    loadBottom() {
      console.log(1111)
      // 加载更多数据
      // this.allLoaded = true;// 若数据已全部获取完毕
      this.$refs.loadmore.onBottomLoaded()
    },
    handleBottomChange(status) {
      console.log(status)
    }
  }
})