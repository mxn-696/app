<template>
<div id="main">
  <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="wrap-ipt2">
        <div class="title">
          <span>当前用户：</span>
          <span>{{user}}</span>
        </div>
        <mt-cell title="我的地址" is-link @click.native="site">
          <span style="color: green"></span>
        </mt-cell>
        <input type="submit" value="退出登录" @click="loginout" class="tuichu"/>
      </div>
</div>
</template>

<script>
import{removeUser,getUser}from '@/utils/auth'
export default {
   components: {},
   data() {
       return {
         user:''
       };
   },
   computed: {},
   watch: {},
   methods: {
     onClickLeft(){
       this.$router.go(-1)
     },
       site(){
           this.$router.push('/mine/address')
       },
       loginout(){
           removeUser();
           this.$router.replace('/mine')
       }
   },
   created() {
     if(getUser()){
       this.user=getUser()
     }
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
  beforeRouteEnter(to,from,next){
    if(!getUser()){
      next('/mine/login')
    }else{
      next()
    }
   }
}
</script>
<style lang='scss' scoped>

.wrap-ipt2 input {
  width: 360px;
  height: 45px;
  background: rgb(240, 59, 74);
  border: none;
  border-radius: 6px;
  margin-left: 7px;
}
.wrap-ipt2 {
  margin-top: 200px;
}
.title {
  text-align: center;
  font-weight: 700;
  padding-bottom: 20px;
}
.tuichu{
  color: white;
}
</style>