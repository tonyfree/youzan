# youzan
vue重构有赞商城

## Lesson06

### 购物车补充说明
+ 问题重现 ( 左滑删除后样式依然存在 )
+ [ref](https://cn.vuejs.org/v2/api/#ref) 是非响应式的，不建议在模板中进行数据绑定，即使用唯一标识绑定
+ [v-for](https://cn.vuejs.org/v2/guide/list.html#key) 模式使用“就地复用”策略，简单理解就是会复用原有的dom结构，尽量减少dom重排来提高性能 ( 解决方案：还原dom样式 )
+ [key](https://cn.vuejs.org/v2/api/#key) 为每个节点提供身份标识，数据改变时会重排，最好绑定唯一标识，如果用index标识可能得不到想要的效果 ( 解决方案：绑定唯一识别key )

### 路由
0. 效果演示：[vue-router的文档](https://router.vuejs.org/zh-cn/)、[用vue、vue-router重构文档](https://github.com/tonyfree/vue-router-gitbook)
1. 使用路由插件
2. 创建router示例：[构造配置](https://router.vuejs.org/zh-cn/api/options.html) ( mermber.vue )
3. 在根实例注入
4. 页面路由匹配的组件渲染：[router-view](https://router.vuejs.org/zh-cn/api/router-view.html)
5. 路由导航：[router-link](https://router.vuejs.org/zh-cn/api/router-link.html)、[编程式导航](https://router.vuejs.org/zh-cn/essentials/navigation.html)
6. [嵌套路由](https://router.vuejs.org/zh-cn/essentials/nested-routes.html) ( address.vue、all.vue、form.vue )
7. [命名路由](https://router.vuejs.org/zh-cn/essentials/named-routes.html)
8. 路由参数的传递：[路由信息对象](https://router.vuejs.org/zh-cn/api/route-object.html) ( type、instance、this.$route )
9. [过渡效果](https://router.vuejs.org/zh-cn/advanced/transitions.html)
10. [对组件的注入](https://router.vuejs.org/zh-cn/api/component-injections.html)、[Router示例](https://router.vuejs.org/zh-cn/api/router-instance.html) ( this.$router )

### 地址操作
+ rap接口和mock数据
+ service封装：列表、新增、编辑、设为默认地址、删除
+ 省市区数据：数据结构参考[weui.js的级联picker](https://github.com/Tencent/weui.js/blob/master/docs/component/picker.md)
+ 原生select、confirm的效果 ( IOS上带host )