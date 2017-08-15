import 'css/common.css'
import './search.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import qs from 'qs'

import mixin from 'js/mixin.js'

let {keyword, id} = qs.parse(location.search.substr(1))

new Vue({
  el: '.container',
  data: {
    searchList: null,
    show: false
  },
  created() {
    this.getsearchList()
  },
  methods: {
    getsearchList() {
      axios.post(url.searchList, {keyword, id}).then(res => {
        this.searchList = res.data.lists
      })
    },
    move() {
      if(document.body.scrollTop > 100) {
        this.show = true
      } else {
        this.show = false
      }
    }
  },
  mixins: [mixin]
})