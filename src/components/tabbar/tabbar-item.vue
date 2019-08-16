<template>
    <div>
        <div class="tab-bar-item" @click="itemClick">
            <div v-if="!isActive">
                <slot name="item-icon"></slot>
            </div>
            <div v-else>   
                 <slot  name="item-icon-active"></slot>
            </div>
            <div :style="activeStyle">
                <slot name="item-text"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            //isActive:true
        }
    },
    props:{
        path:String,
        styleColor:{
            type:String,
            default:'red'
        }
    },
    computed: {
        isActive(){
         return   this.$route.path.indexOf(this.path)!==-1
        },
    activeStyle(){
        return this.isActive ? {color:this.styleColor} : {}
    }
    },
    methods: {
        itemClick(){
            this.$router.replace(this.path)
        }
    },
}
</script>
<style scoped>
    .active{
        color:red;
    }
</style>