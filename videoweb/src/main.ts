import Vue from 'vue'
import App from './App.vue'
import './plugins/element'
import './plugins/avue'
import router from './router'
//挂载文件上传的axios模块
import {instance1} from './network/index'

Vue.prototype.$axios = instance1

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
