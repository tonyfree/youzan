<template>
   <div class="container " style="min-height: 597px;">
        <div class="section section-first">
            <div class="block form js-form">
                <input class="js-id" name="id" type="hidden" value="69150287">
                <div class="block-item" style="border-top:0;">
                    <label>收货人</label>
                    <input type="text" placeholder="请输入姓名" name="user_name" value="tony" maxlength="20">
                </div>
                <div class="block-item">
                    <label>联系电话</label>
                    <input type="tel" placeholder="联系电话" name="tel" value="13112345678" maxlength="11">
                </div>
                <div class="block-item">
                    <label>选择地区</label>
                    <div class="select-group">
                        <select class="js-province-selector" v-model="province">
                            <option :value="-1">选择省份</option>
                            <option :value="p.value" v-for="p in addressData.list">{{p.label}}</option>
                        </select>
                        <select class="js-city-selector" v-model="city">
                            <option :value="-1">选择城市</option>
                            <option :value="c.value" v-for="c in cityList" v-if="cityList">{{c.label}}</option>
                        </select>
                        <select class="js-county-selector" name="area_code" v-model="district">
                            <option :value="-1">选择地区</option>
                            <option :value="d.value" v-for="d in districtList">{{d.label}}</option>
                        </select>
                    </div>
                </div>
                <div class="block-item">
                    <label>详细地址</label>
                    <input type="text" placeholder="街道门牌信息" name="address_detail" value="南方软件园" maxlength="100">
                </div>
            </div>
        </div>
        <div class="block section js-save block-control-btn">
            <div class="block-item c-blue center">保存</div>
        </div>
        <div class="block section js-delete block-control-btn">
            <div class="block-item c-red center">删除</div>
        </div>
        <div class="block stick-bottom-row center js-save-default">
            <button class="btn btn-standard js-save-default-btn">设为默认收货地址</button>
        </div>
    </div>
</template>
<script src="./form.js"></script>