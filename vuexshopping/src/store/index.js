//组件模块，并导出store
// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 导入cart.js
import cart from './modules/cart'
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{cart}
})