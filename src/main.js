import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
// Global css
import '@/assets/style/custom.scss'
import '@/assets/style/article.scss'
// fetch polyfill
import 'whatwg-fetch'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
