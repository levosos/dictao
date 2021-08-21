import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import { Button, Table, Tabs } from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Button)
Vue.use(Table)
Vue.use(Tabs)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
