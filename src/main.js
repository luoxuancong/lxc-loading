import Vue from 'vue'
import App from './App'
import LLoading from './lib/index'
Vue.use(LLoading)
new Vue({
  el: '#app',
  render: h => h(App)
})
