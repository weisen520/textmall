<template>
    <div>
        <h1>这是login组件</h1>
        <input type="text" v-model="name"><br><input v-model="pwd" type="text">
        <br><button @click="add">登录</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name:"",
            pwd:""
        }
    },
    methods: {
        add(){
            if(this.name!==""&&this.pwd!==""){
                sessionStorage.setItem("name",this.name)
            this.$router.push({path:"/"})
            }
        }
    },
}
</script>
<style scoped>
    
</style>
