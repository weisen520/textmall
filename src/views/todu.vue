<template>
    <div>
        <h1>这里是todu组件</h1>
        <router-link to="/details">详情页</router-link><br>
        <router-link to="/login">登录</router-link>
        <h1> <button>查看的name</button> </h1>
        <img v-lazy=img alt="">
    </div>
</template>
<script>
import { setTimeout } from 'timers';
export default {
    data() {
        return {
            img:""
        }
    },
    created() {
          
    },
    methods: {
       
    },
}
</script>
<style scoped>
    
</style>