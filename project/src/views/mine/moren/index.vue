<template>
  <div class="app-init scroll-box mine-page footer-hack" id="main">
    <div class="user-box public-padding">
      <div class="face-book">
        <img
          @click="$router.push('/mine/login')"
          :src='imgUrl'
          alt=""
        class="touxiang"
        />
      </div>
      <p class="fl" @click="$router.push('/mine/login')">{{login}}</p>
    </div>

    <mt-cell title="我的订单"  is-link class="dingdan"> </mt-cell>
    <div class="chakan">
      <div class="fukuan">
        <span class="iconfont icon-daifukuan"></span>
        <p>待付款</p>
      </div>
      <div class="shouhuo">
        <span class="iconfont icon-ziyuan"></span>
        <p>待收货</p>
      </div>
      <div class="huanxiu">
        <span class="iconfont icon-xiuli"></span>
        <p>退换修</p>
      </div>
    </div>
    <div class="fuli">
      <mt-cell title="会员福利"  is-link class="dingdan"> </mt-cell>
      <mt-cell title="我的优惠"  is-link> </mt-cell>
    </div>
    <div class="fuwu">
      <mt-cell title="服务中心"  is-link class="dingdan"> </mt-cell>
      <mt-cell title="小米之家"  is-link> </mt-cell>
    </div>
    <div class="shezhi">
      <mt-cell title="设置"  is-link to='/mine/shezhi'> </mt-cell>
    </div>
  </div>
  
</template>

<script type="text/ecmascript-6">
import {getUser}from '@/utils/auth'
export default {
  name: "mine-page",
   data() {
       return {
         login:'登录 / 注册',
         imgUrl:'http://qiniu.verydog.cn/show.liluo.cc/normal-face.png',
         Url:'http://127.0.0.1:3000/'
       };
   },
    methods:{
      gettouxiang(){
        if(getUser()){
          this.$http.get('/mine/gettouxiang',{
            params:{
              username:getUser()
            }
          }).then(res=>{
            this.imgUrl=this.Url+res.list.imgUrl
          })
        }
      }
    },
    created(){
      if(getUser()){
        this.login=getUser()
      }
      this.gettouxiang()
    },

};

</script>

<style lang='scss' scoped>
.user-box {
  background: orangered;
  height: 1rem;
  display: flex;
  align-items: center;
  .face-book {
    margin: 0 0.1rem;
    img {
      width: 0.5rem;
    }
  }
  .fl {
    color: white;
  }
}
.touxiang{
  border-radius: 50%;
  width: 0.5rem;
  height: 0.5rem;
}
.dingdan {
  border-bottom: 1px solid #cecece;
}
.chakan {
  display: flex;
  background: white;
  border-bottom: 0.1rem solid #eee;
  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 1rem;
    span {
      font-size: 0.23rem;
      margin-bottom: 0.05rem;
    }
  }
}
.fuli,.fuwu {
  border-bottom: 0.1rem solid #eee;
}
</style>
