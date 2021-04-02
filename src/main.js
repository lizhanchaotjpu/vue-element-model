import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/sass/index.scss'
import * as filters from '@/lib/filters.js'
import '@/lib/element-ui'

// 插入全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
