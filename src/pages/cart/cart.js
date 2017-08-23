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
    lists: null,
    allSelected: true,
    editingShop: null
  },
  computed: {
    selectLists() {
      let arr = []
      this.lists.forEach(shop => {
        shop.goodsList.forEach(good => {
          if(good.checked) {
            arr.push(good)
          }
        })
      })
      return arr
    },
    removeLists() {
      if(!this.editingShop){
        return []
      } else {
        let arr = []
        this.editingShop.goodsList.forEach(good => {
          if(good.checked) {
            arr.push(good)
          }
        })
       return arr
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      axios.get(url.cartLists).then(res => {
        let lists = res.data.cartList
        lists.forEach(shop => {
          shop.checked = true
          shop.editing = false
          shop.editingMsg = '编辑'
          shop.goodsList.forEach(good => {
            good.checked = true
          })
        })
        this.lists = lists
      })
    },
    selectGood(shop,good) {
      good.checked = !good.checked
      shop.checked = shop.goodsList.every(good => {
        return good.checked
      })
      this.isSelectAll()
    },
    selectShop(shop) {
      shop.checked = !shop.checked
      shop.goodsList.forEach(good => {
        good.checked = shop.checked
      })
      this.isSelectAll()
    },
    selectAll() {
      this.allSelected = !this.allSelected
      if(this.editingShop) {
        this.editingShop.checked = this.allSelected
        this.editingShop.goodsList.forEach(good => {
          good.checked = this.allSelected
        })
        return
      }
      this.lists.forEach(shop => {
        shop.checked = this.allSelected
        shop.goodsList.forEach(good => {
          good.checked = this.allSelected
        })
      })
    },
    isSelectAll() {
      if(this.editingShop) {
        this.allSelected = this.editingShop.checked
        return
      }
      this.allSelected =  this.lists.every(shop => {
        return shop.checked
      })
    },
    edit(shop,index) {
      shop.editing = !shop.editing
      if(shop.editing) {
        shop.editingMsg = '完成'
        this.lists.forEach((item,i) => {
          if(index !== i) {
            item.editing = false
            item.editingMsg = ''
          }
        })
      } else {
        shop.editingMsg = '编辑'
      }
      this.editingShop = shop.editing ? shop : null
      shop.checked = !shop.editing
      shop.goodsList.forEach(good => {
        good.checked = shop.checked
      })
      this.isSelectAll()
    }
  },
  mixins: [mixin]
})