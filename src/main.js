import Vue from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './App.css'

Vue.config.productionTip = false

const pinia = createPinia()
Vue.use(pinia)

new Vue({
  render: h => h(App),
}).$mount('#app')
