import './cart_base.css'
import './cart_trade.css'
import './cart.css'

import Vue from 'vue'
import mixin from 'js/mixin.js'
import axios  from 'axios'
import url from 'js/api.js'

new Vue({
  el: '.container',
  data: {
    lists: null
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      axios.get(url.cartLists).then(res => {
        this.lists = res.data.cartList
      })
    }
  },
  mixins: [mixin]
})