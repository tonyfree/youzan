<template>
  <div class="container " style="min-height: 597px;">
    <div class="block-list address-list section section-first js-no-webview-block" v-for="list in lists" v-if="lists&&lists.length">
      <a class="block-item js-address-item address-item" :class="{'address-item-default':list.isDefault}" @click="toEdit(list)">
        <div class="address-title">{{list.name}} {{list.tel}}</div>
        <p>{{list.provinceName}}{{list.cityName}}{{list.districtName}}{{list.address}}</p>
        <a class="address-edit">修改</a>
      </a>
    </div>
    <div class="block stick-bottom-row center">
      <router-link class="btn btn-blue js-no-webview-block js-add-address-btn" :to="{path:'/address/form',query:{type:'add'}}" @click.native="toAdd">
        新增地址
      </router-link>
    </div>
  </div>
</template>

<script>
import Address from 'js/addressService.js'

export default {
  data() {
    return {
      // lists: JSON.parse(sessionStorage.getItem('adLists')) || null
      lists: null
    }
  },
  created() {
    // if(!this.lists)  {
    //   Address.list().then(res => {
    //     this.lists = res.data.lists
    //   })
    // }
    Address.list().then(res => {
      this.lists = res.data.lists
    })
  },
  methods: {
    toEdit(list) {
      // 如果想在接收数据的页面刷新时依然可以获取传递的object类型数据
      sessionStorage.setItem('adLists', JSON.stringify(this.lists))
      this.$router.push({ path: '/address/form', query: { type: 'edit', instance: list } })
      // sessionStorage.setItem('instance',JSON.stringify(list))
      // this.$router.push({path:'/address/form',query:{type:'edit'}})
    },
    toAdd() {
      sessionStorage.setItem('adLists', JSON.stringify(this.lists))
    }
  }
}
</script>
