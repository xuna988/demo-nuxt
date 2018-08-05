import Vue from 'vue'
console.log("服务端渲染插件")
if (process.BROWSER_BUILD) {
  const Vue2Share = require('vue-social-share')
  Vue.use(Vue2Share)
}
