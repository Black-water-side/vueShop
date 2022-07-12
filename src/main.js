import Vue from 'vue'
import App from './App.vue'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router.js'

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

Vue.config.productionTip = false
Vue.use(MintUI)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
