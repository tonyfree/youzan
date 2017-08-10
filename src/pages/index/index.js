import 'css/common.css'
import './index.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import Foot from 'components/Foot.vue'

import { InfiniteScroll } from 'mint-ui'
Vue.use(InfiniteScroll)

new Vue({
  el: '.vue-el',
  data: {
    lists: null,
    loading: false
  },
  created() {
    this.getLists()
  },
  methods: {
    getLists() {
      this.loading = true
      axios.post(url.hotLists).then(res => {
        if (this.lists) {
          this.lists = this.lists.concat(res.data.lists)
        } else {
          this.lists = res.data.lists
        }
        this.loading = false
      })
    }
  },
  components: {
    Foot
  }
})