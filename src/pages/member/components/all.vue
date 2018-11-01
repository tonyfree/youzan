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
  computed: {
    lists() {
      return this.$store.state.lists
    }
  },
  created() {
    if(!this.lists){
      this.$store.dispatch('getLists')
    }
  },
  methods: {
    toEdit(list) {
      this.$router.push({ path: '/address/form', query: { type: 'edit', instance: list } })
    },
    toAdd() {
      
    }
  }
}
</script>
