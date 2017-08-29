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
                        <select class="js-province-selector">
                            <option value="-1">选择省份</option>
                            <option value="110000">北京市</option>
                            <option value="120000">天津市</option>
                            <option value="130000">河北省</option>
                            <option value="140000">山西省</option>
                            <option value="150000">内蒙古自治区</option>
                            <option value="210000">辽宁省</option>
                            <option value="220000">吉林省</option>
                            <option value="230000">黑龙江省</option>
                            <option value="310000">上海市</option>
                            <option value="320000">江苏省</option>
                            <option value="330000">浙江省</option>
                            <option value="340000">安徽省</option>
                            <option value="350000">福建省</option>
                            <option value="360000">江西省</option>
                            <option value="370000">山东省</option>
                            <option value="410000">河南省</option>
                            <option value="420000">湖北省</option>
                            <option value="430000">湖南省</option>
                            <option value="440000">广东省</option>
                            <option value="450000">广西壮族自治区</option>
                            <option value="460000">海南省</option>
                            <option value="500000">重庆市</option>
                            <option value="510000">四川省</option>
                            <option value="520000">贵州省</option>
                            <option value="530000">云南省</option>
                            <option value="540000">西藏自治区</option>
                            <option value="610000">陕西省</option>
                            <option value="620000">甘肃省</option>
                            <option value="630000">青海省</option>
                            <option value="640000">宁夏回族自治区</option>
                            <option value="650000">新疆维吾尔自治区</option>
                            <option value="710000">台湾省</option>
                            <option value="810000">香港特别行政区</option>
                            <option value="820000">澳门特别行政区</option>
                        </select>
                        <select class="js-city-selector">
                            <option value="-1">选择城市</option>
                            <option value="440100">广州市</option>
                            <option value="440200">韶关市</option>
                            <option value="440300">深圳市</option>
                            <option value="440400">珠海市</option>
                            <option value="440500">汕头市</option>
                            <option value="440600">佛山市</option>
                            <option value="440700">江门市</option>
                            <option value="440800">湛江市</option>
                            <option value="440900">茂名市</option>
                            <option value="441200">肇庆市</option>
                            <option value="441300">惠州市</option>
                            <option value="441400">梅州市</option>
                            <option value="441500">汕尾市</option>
                            <option value="441600">河源市</option>
                            <option value="441700">阳江市</option>
                            <option value="441800">清远市</option>
                            <option value="441900">东莞市</option>
                            <option value="442000">中山市</option>
                            <option value="445100">潮州市</option>
                            <option value="445200">揭阳市</option>
                            <option value="445300">云浮市</option>
                        </select>
                        <select class="js-county-selector" name="area_code" data-code="440402">
                            <option value="-1">选择地区</option>
                            <option value="440402">香洲区</option>
                            <option value="440403">斗门区</option>
                            <option value="440404">金湾区</option>
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
