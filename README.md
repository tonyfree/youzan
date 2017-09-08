# youzan
vue重构有赞商城

## Lesson07

### 状态管理
0. 使用vuex插件
1. 实例化Store：配置state、mutations、actions
2. 根组件注入
3. 数据state的获取：[State](https://vuex.vuejs.org/zh-cn/state.html)、[Getters](https://vuex.vuejs.org/zh-cn/getters.html)
4. 事件的触发: 同步事件[Mutations](https://vuex.vuejs.org/zh-cn/mutations.html)、[异步事件](https://vuex.vuejs.org/zh-cn/actions.html)


### 规则
+ 应用层级的状态应该集中到单个 store 对象中
+ 提交 mutation 是更改状态的唯一方法，并且这个过程是同步的
+ 异步逻辑都应该封装到 action 里面