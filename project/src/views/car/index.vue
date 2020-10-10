<template>
  <div id="main">
    <van-nav-bar
      title="购物车"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
      class="top"
    >
      <van-icon name="search" slot="right" @click="$router.push('/search')" />
    </van-nav-bar>
    <div class="bottom">
      <div class="shop-wrap" v-if="shopCarList.length == 0">
        <img
          src="@/assets/empty-car.png"
          alt=""
          @click="$router.openPage('/')"
        />
      </div>
      <div class="shop-list" v-else>
        <ul>
          <li v-for="item in shopCarList" :key="item._id">
            <img :src="item.imgUrl[0]" alt="" @click="$router.push('/dail/'+item._id)"/>
            <div class="shop-list-case">
              <h4>{{ item.name }}</h4>
              <p>
                售价：<span>{{ item.price }}</span>
              </p>
              <div class="button-group">
                <div class="function-button">
                  <span
                    class="btn jia iconfont icon-jiajian02"
                    @click="jia(item._id)"
                  ></span>
                  <span class="number">{{ item.__v }}</span>
                  <span
                    class="btn jian iconfont icon-jian"
                    @click="jian(item._id)"
                  ></span>
                </div>

                <span
                  class="delete iconfont icon-_lajitong-xian"
                  @click="del(item._id)"
                ></span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="gass-you-like">
        <img src="@/assets/gasslike.jpg" alt="" />
        <ul>
          <li @click="$router.push('/dail/5f7d7c2c9f23e515dc7a3e77')">
            <img
              src="http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg"
              alt=""
            />
            <h4>13.3"笔记本i5 独显</h4>
            <p class="jianjie">指纹解锁，全金属机身</p>
            <p class="money">￥5199</p>
          </li>

          <li @click="$router.push('/dail/5f7d7c2c9f23e515dc7a3e77')">
            <img
              src="http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg"
              alt=""
            />
            <h4>13.3"笔记本i5 独显</h4>
            <p class="jianjie">指纹解锁，全金属机身</p>
            <p class="money">￥5199</p>
          </li>
          <li @click="$router.push('/dail/5f7d7c2c9f23e515dc7a3e77')">
            <img
              src="http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg"
              alt=""
            />
            <h4>13.3"笔记本i5 独显</h4>
            <p class="jianjie">指纹解锁，全金属机身</p>
            <p class="money">￥5199</p>
          </li>
          <li @click="$router.push('/dail/5f7d7c2c9f23e515dc7a3e77')">
            <img
              src="http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg"
              alt=""
            />
            <h4>13.3"笔记本i5 独显</h4>
            <p class="jianjie">指纹解锁，全金属机身</p>
            <p class="money">￥5199</p>
          </li>
          <li @click="$router.push('/dail/5f7d7c2c9f23e515dc7a3e77')">
            <img
              src="http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg"
              alt=""
            />
            <h4>13.3"笔记本i5 独显</h4>
            <p class="jianjie">指纹解锁，全金属机身</p>
            <p class="money">￥5199</p>
          </li>
          <li @click="$router.push('/dail/5f7d7c2c9f23e515dc7a3e77')">
            <img
              src="http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg"
              alt=""
            />
            <h4>13.3"笔记本i5 独显</h4>
            <p class="jianjie">指纹解锁，全金属机身</p>
            <p class="money">￥5199</p>
          </li>
          <li @click="$router.push('/dail/5f7d7c2c9f23e515dc7a3e77')">
            <img
              src="http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg"
              alt=""
            />
            <h4>13.3"笔记本i5 独显</h4>
            <p class="jianjie">指纹解锁，全金属机身</p>
            <p class="money">￥5199</p>
          </li>
          <li @click="$router.push('/dail/5f7d7c2c9f23e515dc7a3e77')">
            <img
              src="http://qiniu.verydog.cn//show.liluo.cc/cf0b9ede4dbbc115f3d2d1b032e97d21.jpg"
              alt=""
            />
            <h4>13.3"笔记本i5 独显</h4>
            <p class="jianjie">指纹解锁，全金属机身</p>
            <p class="money">￥5199</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="car-footer" >
      <div class="item money">
        <p>共{{ shopCarList.length }}件<span>金额</span></p>
        <p>
          <span class="mm">{{ zongjia }}</span> 元
        </p>
      </div>
      <div class="item continue" @click="$router.push('/')">继续购物</div>
      <div class="item pay">去结算</div>
    </div>
  </div>
</template>

<script>
import { getUser } from "@/utils/auth";
import { Dialog } from "vant";
export default {
  components: {},
  data() {
    return {
      shopCarList: [],
      bottomList: [],
      zongjia: 0,
    };
  },
  computed: {},
  watch: {},
  methods: {
    jia(id) {
      for (var i = 0; i < this.shopCarList.length; i++) {
        if (this.shopCarList[i]._id == id) {
          this.shopCarList[i].__v++;
          this.$http
            .post("/shopping/add", {
              username: getUser(),
              list: [
                {
                  id: this.shopCarList[i]._id,
                  num: this.shopCarList[i].__v,
                },
              ],
            })
            .then(() => {
              this.getzongjia();
            });
        }
      }
    },
    jian(id) {
      for (var i = 0; i < this.shopCarList.length; i++) {
        if (this.shopCarList[i]._id == id) {
          if (this.shopCarList[i].__v == 1) {
            return;
          }
          this.shopCarList[i].__v--;
          this.$http
            .post("/shopping/add", {
              username: getUser(),
              list: [
                {
                  id: this.shopCarList[i]._id,
                  num: this.shopCarList[i].__v,
                },
              ],
            })
            .then(() => {
              this.getzongjia();
            });
        }
      }
    },
    del(id) {
      Dialog.confirm({
        title: "",
        message: "确定将该商品从购物车中清除吗",
      })
        .then(() => {
          for (var i = 0; i < this.shopCarList.length; i++) {
            if (this.shopCarList[i]._id == id) {
              this.$http
                .post("/shopping/add", {
                  username: getUser(),
                  list: [
                    {
                      id: this.shopCarList[i]._id,
                      num: 0,
                    },
                  ],
                })
                .then(() => {
                  this.getcarlist()
                });
            }
          }
        })
        .catch(() => {
          // on cancel
        });
    },
    getcarlist() {
      this.$http
        .get("/shopping/getlist", {
          params: {
            username: getUser(),
          },
        })
        .then((res) => {
          this.shopCarList = res.list;
          this.getzongjia();
        });
    },
    getzongjia() {
      var zongjia = 0;
      for (var i = 0; i < this.shopCarList.length; i++) {
        zongjia += this.shopCarList[i].price * this.shopCarList[i].__v;
      }
      this.zongjia = zongjia;
    },
  },
  created() {
    this.getcarlist();
  },
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
      next()
    }else{
      next('/mine/login')
    }
   }
};
</script>
<style lang='scss' scoped>
#main {
  display: flex;
  flex-direction: column;
  .bottom {
    flex: 1;
    overflow-y: auto;
  }
  .car-footer {
    height: 0.6rem;
    display: flex;
    .item {
      width: 33.3%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 0.15rem;
    }
    .money {
      line-height: 1.3;
      color: #9a9a9a;
      .mm {
        color: #ff5722;
        font-weight: 700;
      }
    }
    .continue {
      background: #eee;
    }
    .pay {
      background: orangered;
      color: white;
    }
  }
}
.top {
  background: #eee;
  border-bottom: 1px solid #cecece;
}
.shop-wrap,
.gass-you-like {
  img {
    width: 100%;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 45%;
      margin: 0.05rem;
      h4 {
        font-size: 0.15rem;
        line-height: 1.3;
      }
      .jianjie {
        font-size: 0.13rem;
        line-height: 1.3;
        color: #999;
      }
      .money {
        color: red;
        font-weight: 700;
      }
    }
  }
}
.shop-list {
  ul {
    li {
      display: flex;
      margin: 0.1rem 0;
      img {
        width: 1.5rem;
        display: block;
        margin: 0 0.1rem;
      }
    }
  }
}
.shop-list-case {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.15rem;
  color: #666;
  h4 {
    line-height: 1.5;
  }
  p {
    margin: 0.1rem 0;
  }
}
.button-group {
  position: relative;

  .function-button {
    width: 1rem;
    height: getIphonese(52px);
    border: 1px solid #eeeeee;
    line-height: getIphonese(52px);
    position: relative;
    text-align: center;
    line-height: getIphonese(52px);
    .btn {
      position: absolute;
      width: getIphonese(52px);
      height: getIphonese(52px);
      background-color: #fafafa;
      text-align: center;
      color: #666666;
      top: 0;
      .iconfont {
        color: #c3c3c3;
      }
    }

    .jia {
      right: 0px;
    }

    .jian {
      left: 0px;
    }
  }
  .delete {
    display: inline-block;
    position: absolute;
    right: 0;
    top: 0;
    line-height: getIphonese(52px);
    font-size: 0.2rem;
    color: #c3c3c3;
  }
}
</style>