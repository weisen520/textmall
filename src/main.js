import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLozyload from 'vue-lazyload'
Vue.use(VueLozyload,{
  loading:require('../public/img/1.jpg')
})
Vue.config.productionTip = false
router.beforeEach((to,from,next)=>{
  console.log('aaa')
  next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
