# vuexshopping

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

```
##Vuex他是怎么管理状态的呢？
Vuex使用Store对象，来保护和管理整个应用的状态。

```bash
# 包含以下对象
    — state 存储状态，保存数据（所有的状态保存在这）
    — getters state的计算属性、获取数据
    — mutations 更改状态的逻辑,是一些操作数据的js逻辑
    — actions 就是触发的时间 
        同步：action.commit()
        异步：action.dispatch()
    — view 以声明的方式state映射到视图（改变状态，引起表现层变化）
```
##如何使用vuex
```bash

# 在当前目录安装vuex
npm i vuex --save

# 新建store目录
在src下面新建store文件，在store下新建index.js文件

#在store下面index文件夹导入vue与vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store()

#在store里面新建一个modules文件
在文件下面新建对应页面的js文件，如cart.js文件,cart.js里面就是对应组件需要的数据存储，vuex的5种方法就在这个里面写state，getters，mutations，actions，在导出
export default {
    state,
	getters,
	actions,
	mutations
}

#如何吧vuex数据映射到对应的组件中
在对应的组件中，引入
import {mapGetters} from 'vuex'
在计算属性里面接收
computed:{
        ...mapGetters(['shoplist'])
    }


```



For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
