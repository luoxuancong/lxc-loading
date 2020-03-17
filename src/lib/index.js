import LxcLoading from './LxcLoading.vue'
const LLoading = {
  install: function (Vue) {
    Vue.component('lxc-loading', LxcLoading)
  }
}
// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(LLoading)
}
export default LLoading
