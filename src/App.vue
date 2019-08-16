<template>
  <div id="app">
    <tarbar>
      <tarbar-item path="/home" class="tab-bar-item" styleColor="deepPink">
        <img slot="item-icon" src="./assets/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="./assets/tabbar/home_active.svg" alt="">
        <div slot="item-text" >首页</div>
      </tarbar-item>
      <tarbar-item  path="/category"  class="tab-bar-item" styleColor="deepPink">
        <img slot="item-icon" src="./assets/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="./assets/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tarbar-item>
      <tarbar-item  path="/shopcart"  class="tab-bar-item" styleColor="deepPink">
        <img slot="item-icon" src="./assets/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="./assets/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tarbar-item>
      <tarbar-item  path="/profile"  class="tab-bar-item" styleColor="deepPink">
        <img slot="item-icon" src="./assets/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="./assets/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我</div>
      </tarbar-item>
    </tarbar>
    <router-view/>
  </div>
</template>
<script>
import tarbar from './components/tabbar/tabbar'
import tarbarItem from './components/tabbar/tabbar-item'
export default {
  data() {
    return {
      
    }
  },
  components:{tarbar,tarbarItem}
}
</script>
<style>
@import './assets/app.css';
  .tab-bar-item{
   flex:1;
   height:49px;
   text-align: center;
   font-size:14px;
  
 }
 .tab-bar-item img{
   height:24px;
   width:24px;
   vertical-align:middle;
    margin-top:3px;
   
 }
</style>
