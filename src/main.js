// 兼容 IE
// https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md#babelpolyfill
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 设置 js中可以访问 $cdn
import { $cdn } from '@/config'
Vue.prototype.$cdn = $cdn

// 按需引入UI库 vant
import '@/plugins/vant'
// 指令
import '@/directive/fieldFormat'
// filters
import './filters'

// 全局样式
import '@/assets/css/index.scss'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

if (process.env.VUE_APP_ENV === 'staging') {
  const VConsole = require('vconsole')
  new VConsole()
}
