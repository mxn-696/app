<template>
  <div id="main">
    <div class="case">
      <div class="banner">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item, index) in imgList" :key="index">
            <img :src="item" alt="" />
          </van-swipe-item>
        </van-swipe>
        <span class="back iconfont icon-fanhui" @click="$router.back()"></span>
      </div>
      <div class="content">
        <div class="title-box">
          <h3>{{ data.title }}</h3>
          <p style="color: #757575">
            {{ data.detial }}
          </p>
          <div class="press">
            <span class="money">￥{{ data.price }}</span>
          </div>
        </div>
      </div>
      <div class="xuanze">
        <mt-cell title="已选" is-link class="aaa">
          {{data.title}} x1</mt-cell
        >
        <mt-cell title="送至" is-link @click.native="aaa"> {{address}}</mt-cell>
      </div>
      <div class="peijian">
        <mt-cell title="配件" is-link></mt-cell>
      </div>
    </div>
    <div class="detail-footer">
      <div class="left-box fl">
        <div class="item" @click="$router.replace('/')">
          <p>
            <span class="iconfont icon-shouye"></span>
          </p>
          <p class="name">首页</p>
        </div>
        <div class="item cursom-shopcar" @click="$router.push('/car')">
          <p>
            <span class="iconfont icon-gouwuche"></span>
          </p>
          <p class="name">购物车</p>
        </div>
      </div>
      <div class="right-box shop-car" @click="addShopCar">加入购物车</div>
    </div>
  </div>
</template>

<script>
import { getUser,getAds } from "@/utils/auth";
import { Toast } from "vant";
export default {
  components: {},
  data() {
    return {
      imgList: [],
      num: 0,
      data: {
        title: "红米5",
        detial:
          "千元全面屏 / 4000mAh大电量 / 前置柔光自拍 / 14nm骁龙八核处理器",
        price: 1299,
      },
      address:''
    };
  },
  computed: {},
  watch: {},
  methods: {
    getthisshop() {
      this.$http.get("/main/getthis/" + this.$route.params.id).then((res) => {
        var imgList = res.list.imgUrl;
        for (var i = 0; i < imgList.length; i++) {
          imgList[i] = "http://127.0.0.1:3000/" + imgList[i];
        }
        this.imgList = imgList;
        var obj = {
          title: res.list.name,
          detial: res.list.detial,
          price: res.list.price,
        };
        this.data = obj;
      });
    },
    addShopCar() {
      if (!getUser()) {
        Toast("还没有登录，请先登录");
        this.$router.push('/mine/login')
      } else {
        this.num++;
        this.$http
          .post("/shopping/add", {
            username: getUser(),
            list: [
              {
                num: this.num,
                id: this.$route.params.id,
              },
            ],
          })
         
      }
    },
    getnum() {
      if (getUser()) {
        this.$http
          .get("/shopping/getthis", {
            params: {
              username: getUser(),
              id: this.$route.params.id,
            },
          })
          .then((res) => {
            this.num = res.num;
          });
      }
    },
    aaa(){
      this.$router.push({
        path:'/mine/address/list',
      })
    }
  },
  created() {
    this.getthisshop();
    this.getnum();
    this.address=getAds()
    
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
};
</script>
<style lang='scss' scoped>
#main {
  //   height: 100%;
  display: flex;
  flex-direction: column;
  .case {
    overflow-y: auto;
    flex: 1;
  }
  .detail-footer {
    height: 0.6rem;
  }
}

.my-swipe .van-swipe-item {
  color: #fff;
  text-align: center;
  img {
    width: 100%;
    height: 4rem;
  }
}
.back {
  position: absolute;
  z-index: 1000;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  color: #fff;
  line-height: 0.4rem;
  text-align: center;
  display: block;
  background-color: rgba(34, 35, 43, 0.6);
  top: 0.1rem;
  left: 0.1rem;
}
.title-box {
  background-color: #fff;
  margin-bottom: 0.2rem;
  padding: 0.1rem 0.2rem;
  h3 {
    font-size: 0.3rem;
    line-height: 1em;
    font-weight: normal;
    color: #333;
  }

  p {
    padding-top: 0.1rem;
    font-size: 0.15rem;
  }

  .press {
    padding-top: 0.1rem;
    .money {
      color: #ff6700;
      font-size: 0.25rem;
      font-weight: 700;
    }
  }
}

.xuanze {
  border-top: 0.1rem solid #eee;
  border-bottom: 0.1rem solid #eee;
  .aaa {
    border-bottom: 1px solid #eee;
  }
}

.detail-footer {
  display: flex;
  height: 0.6rem;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
  -webkit-box-shadow: 0 3px 14px 2px rgba(0, 0, 0, 0.12);
  box-shadow: 0 3px 14px 2px rgba(0, 0, 0, 0.12);
  .left-box {
    display: flex;

    .item {
      .iconfont {
        display: block;
        font-size: 0.2rem;
        margin-bottom: 0.1rem;
      }
      color: #999;
      width: 0.6rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  .right-box {
    background: orangered;
    color: white;
    text-align: center;
    line-height: 0.6rem;
    flex: 1;
  }
}
</style>