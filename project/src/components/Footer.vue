<template>
<div id='footer'>
    <ul>
        <router-link tag="li" to="/home">首页</router-link>
        <router-link tag="li" to="/kind">分类</router-link>
        <router-link tag="li" to="/car">购物车</router-link>
        <router-link tag="li" to="/mine">我的</router-link>
    </ul>
</div>
</template>

<script>

export default {
   components: {},
   data() {
       return {

       };
   },
   computed: {},
   watch: {},
   methods: {

   },
   created() {

   },
   mounted() {

   },
   beforeCreate() {},
   beforeMount() {},
   beforeUpdate() {},
   updated() {},
   beforeDestroy() {},
   destroyed() {},
   activated() {},
}
</script>
<style lang='scss' scoped>
    #footer{
        ul{
            display: flex;
            li{
                flex: 1;
                background: white;
                text-align: center;
                line-height: 40px;
                color: #333;
                &.active{
                    background: red;
                    color: white;
                }
            }
        }
    }
</style>