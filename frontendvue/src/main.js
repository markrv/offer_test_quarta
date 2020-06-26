import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify'

new Vue({
  router,
  store,
  render: h => h(App),
  vuetify,
}).$mount('#app')
