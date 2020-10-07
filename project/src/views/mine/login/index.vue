<template>
  <div id="main">
    <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="wrap-ipt">
      <input type="text" v-model="username" placeholder="请输入账户" />
      <input type="password" v-model="password" placeholder="请输入密码" />
      <button class="btn" @click="login">登录</button>
      <button @click="reg">注册</button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import {setUser,getUser} from '@/utils/auth'
export default {
  components: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    login() {
      this.$http
        .post("/mine/login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
          if(res.success==1){
              setUser(this.username)
              this.$router.push({
                  path:'/mine',
              })
          }
        });
    },
    reg() {
      this.$router.push({
        path: "/mine/res",
      });
    },
    onClickLeft() {
      Toast("返回");
      this.$router.push({
        path: "/mine",
      });
    },
  },
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  beforeRouteEnter(to,from,next){
    if(getUser()){
      next('/mine/shezhi')
    }else{
      next()
    }
   }
};
</script>
<style lang='scss' scoped>
.wrap-ipt {
  margin-top: 200px;
  margin-left: 43px;
}
.wrap-ipt input {
  display: block;
  width: 280px;
  height: 30px;
  margin: 15px 0;
}
.wrap-ipt button {
  width: 70px;
  height: 40px;
  margin-left: 40px;
  margin-top: 10px;
}
.wrap-ipt .btn {
  background: skyblue;
  border: none;
  border-radius: 5px;
}
</style>