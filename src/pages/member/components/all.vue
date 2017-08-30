<template>
  <div class="container " style="min-height: 597px;">
    <div class="block-list address-list section section-first js-no-webview-block">
      <a class="block-item js-address-item address-item ">
        <div class="address-title">tony 13112345678</div>
        <p>广东省珠海市香洲区南方软件园</p>
        <a class="address-edit" @click.stop="toEdit()">修改</a>
      </a>
      <a class="block-item js-address-item address-item address-item-default" href="https://pfmarket.youzan.com/user/address/form?m_alias=3nronalxt5iei&amp;id=69150193&amp;from=">
        <div class="address-title">tony 13112345678</div>
        <p>北京市北京市东城区天安门</p>
      </a>
    </div>
    <div class="block stick-bottom-row center">
      <router-link class="btn btn-blue js-no-webview-block js-add-address-btn" :to="{path:'/address/form',query:{type:'add'}}">
        新增地址
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      toEdit() {
        this.$router.push({path:'/address/form',query:{type:'edit',obj:{name:'tony'}}})
      }
    }
  }
</script>
