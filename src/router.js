import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login'
import todu from './views/todu'
import details from './views/details'
const home=()=>import ('./views/tabbar-body/home')
const category=()=>import ('./views/tabbar-body/category')
const shopcart=()=>import ('./views/tabbar-body/shopcart')
const profile=()=>import ('./views/tabbar-body/profile')
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path:'/home',component:home},
    {path:'/category',component:category},
    {path:'/shopcart',component:shopcart},
    {path:'/profile',component:profile},
    {path:"/details",component:details},
    {path:"/todu",component:todu},
    {path:'/login',component:login},
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
