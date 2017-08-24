import './cart_base.css'
import './cart_trade.css'
import './cart.css'

import Vue from 'vue'
import mixin from 'js/mixin.js'
import axios from 'axios'
import url from 'js/api.js'

new Vue({
  el: '.container',
  data: {
    lists: null,
    editingShop: null,
    editingShopIndex: -1,
    total: 0,
    removePopup: false,
    removeMsg: '',
    removeData: null
  },
  computed: {
    allSelected: {
      get() {
        if (this.lists && this.lists.length) {
          return this.lists.every(shop => {
            return shop.checked
          })
        }
        return false
      },
      set(newVal) {
        this.lists.forEach(shop => {
          shop.checked = newVal
          shop.goodsList.forEach(good => {
            good.checked = newVal
          })
        })
      }
    },
    allRemoveSelected: {
      get() {
        if (this.editingShop) {
          return this.editingShop.removeChecked
        }
        return false
      },
      set(newVal) {
        if (this.editingShop) {
          this.editingShop.removeChecked = newVal
          this.editingShop.goodsList.forEach(good => {
            good.removeChecked = newVal
          })
          return
        }
      }
    },
    selectLists() {
      if (!(this.lists && this.lists.length)) return []
      let arr = []
      let total = 0
      this.lists.forEach(shop => {
        shop.goodsList.forEach(good => {
          if (good.checked) {
            arr.push(good)
            total += good.price * good.number
          }
        })
      })
      this.total = total
      return arr
    },
    removeLists() {
      if (!this.editingShop) {
        return []
      } else {
        let arr = []
        this.editingShop.goodsList.forEach(good => {
          if (good.removeChecked) {
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
          shop.removeChecked = false
          shop.editing = false
          shop.editingMsg = '编辑'
          shop.goodsList.forEach(good => {
            good.checked = true
            good.removeChecked = false
          })
        })
        this.lists = lists
      })
    },
    selectGood(shop, good) {
      let attr = this.editingShop ? 'removeChecked' : 'checked'
      good[attr] = !good[attr]
      shop[attr] = shop.goodsList.every(good => {
        return good[attr]
      })
    },
    selectShop(shop) {
      let attr = this.editingShop ? 'removeChecked' : 'checked'
      shop[attr] = !shop[attr]
      shop.goodsList.forEach(good => {
        good[attr] = shop[attr]
      })
    },
    selectAll() {
      let attr = this.editingShop ? 'allRemoveSelected' : 'allSelected'
      console.log(attr)
      this[attr] = !this[attr]
    },
    edit(shop, shopIndex) {
      shop.editing = !shop.editing
      shop.editingMsg = shop.editing ? '完成' : '编辑'
      this.lists.forEach((item, i) => {
        if (shopIndex !== i) {
          item.editing = false
          item.editingMsg = shop.editing ? '' : '编辑'
        }
      })
      this.editingShop = shop.editing ? shop : null
      this.editingShopIndex = shop.editing ? shopIndex : -1
    },
    reduce(good) {
      if (good.number === 1) return
      axios.post(url.cartReduce, {
        id: good.id,
        number: 1
      }).then(res => {
        good.number--
      })
    },
    add(good) {
      axios.post(url.cartAdd, {
        id: good.id,
        number: 1
      }).then(res => {
        good.number++
      })
    },
    remove(shop, shopIndex, good, goodIndex) {
      this.removePopup = true
      this.removeMsg = '确定要删除该商品吗？'
      this.removeData = { shop, shopIndex, good, goodIndex }
    },
    removeList() {
      this.removePopup = true
      this.removeMsg = `确定将所选 ${this.removeLists.length} 个商品删除？`
    },
    removeConfirm() {
      if (this.removeMsg !== '确定要删除该商品吗？') {
        let ids = []
        this.removeLists.forEach(good => {
          ids.push(good.id)
        })
        axios.post(url.cartMremove, { ids }).then(res => {
          let arr = []
          this.editingShop.goodsList.forEach(good => {
            let index = this.removeLists.findIndex(item => {
              return item.id == good.id
            })
            if (index == -1) {
              arr.push(good)
            }
          })
          if (arr.length) {
            this.editingShop.goodsList = arr
          } else {
            this.lists.splice(this.editingShopIndex, 1)
            this.removeShop()
          }
          this.removePopup = false
        })
      } else {
        let { shop, shopIndex, good, goodIndex } = this.removeData
        axios.post(url.cartRemove, {
          id: good.id
        }).then(res => {
          shop.goodsList.splice(goodIndex, 1)
          if (!shop.goodsList.length) {
            this.lists.splice(shopIndex, 1)
            this.removeShop()
          }
          this.removePopup = false
        })
      }
    },
    removeShop() {
      this.editingShop = null
      this.editingShopIndex = -1
      this.lists.forEach((item, i) => {
        item.editing = false
        item.editingMsg = '编辑'
      })
    }
  },
  mixins: [mixin]
})