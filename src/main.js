import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'
import $ from 'jquery'

Vue.config.productionTip = false

//配置原型,全局使用
Vue.prototype.$echarts=echarts
Vue.prototype.$ = $

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
