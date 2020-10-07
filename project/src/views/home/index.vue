<!--  -->
<template>
  <div id="main">
    <header class="nav-header">
      <div class="nav_left">
        <i class="iconfont icon-xiaomi"></i>
      </div>
      <div class="nav_mid">
        <p>
          <i class="iconfont icon-iconfontsousuo"></i>
        </p>
        <input type="text" placeholder="搜索商品名称" @click="$router.push('/search')"/>
      </div>
      <div class="nav_right">
        <i class="iconfont icon-xiaolian" @click="$router.push('/mine')"></i>
      </div>
    </header>
    <main>
      <section>
        <!-- 头部结束 -->
        <!-- 总导航 -->
       
        <div class="big_nav">
          <ul>
            <router-link tag="li" to="/home/tuijian">推荐</router-link>
            <router-link tag="li" to="/home/xiaomishouji">小米</router-link>
            <router-link tag="li" to="/home/hongmi">红米</router-link>
            <router-link tag="li" to="/home/hongmi">电视</router-link>
            <router-link tag="li" to="/home/hongmi">电脑</router-link>
            <router-link tag="li" to="/home/hongmi">全面屏</router-link>
            <router-link tag="li" to="/home/hongmi">生活周边</router-link>
          </ul>
        </div>
        <router-view></router-view>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    //这里存放数据
    return {
      list: [
        { imgurl: require("../../assets/小米闪购.jpg") },
        { imgurl: require("../../assets/手机卡.jpg") },
        { imgurl: require("../../assets/新品发布.jpg") },
        { imgurl: require("../../assets/活动频道.jpg") },
        { imgurl: require("../../assets/以旧换新.jpg") },
      ],

      tuijianList: [
        { imgurl: require("../../assets/meirijingxuan.jpg") },
        { imgurl: require("../../assets/chaozhituijian.jpg") },
      ],
      list_ulList: [
        {
          imgurl: require("../../assets/hongmi5.jpg"),
          title: "九号平衡车",
          brief: "年轻人的酷玩具",
          price: "￥1999",
        },
        {
          imgurl: require("../../assets/hongmi5.jpg"),
          title: "九号平衡车",
          brief: "年轻人的酷玩具",
          price: "￥1999",
        },
        {
          imgurl: require("../../assets/hongmi5.jpg"),
          title: "九号平衡车",
          brief: "年轻人的酷玩具",
          price: "￥1999",
        },
        {
          imgurl: require("../../assets/hongmi5.jpg"),
          title: "九号平衡车",
          brief: "年轻人的酷玩具",
          price: "￥1999",
        },
        {
          imgurl: require("../../assets/hongmi5.jpg"),
          title: "九号平衡车",
          brief: "年轻人的酷玩具",
          price: "￥1999",
        },
        {
          imgurl: require("../../assets/hongmi5.jpg"),
          title: "九号平衡车",
          brief: "年轻人的酷玩具",
          price: "￥1999",
        },
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  components: {},
};
</script>
<style lang="scss" scoped>
section {
  width: 100%;
  height: 100%;
  overflow: auto;
}
// 头部样式

.nav-header {
  position: fixed;
  top: 0;
  z-index: 999;
  height: 60px;
  background: rgb(221, 219, 219);
  display: flex;
  align-items: center;
  .nav_left {
    width: 52px;
    height: 60px;

    text-align: center;
    line-height: 60px;
    .icon-xiaomi {
      font-size: 30px;
      color: rgb(250, 121, 29);
    }
  }
  .nav_mid {
    width: 257px;
    height: 33px;
    background: #fff;

    margin: 0 10px;
    display: flex;
    align-items: center;
    input {
      height: 33px;
      font-size: 16px;
      color: #666;
      border: none;
      margin-left: 5px;
    }
    p {
      width: 31px;

      text-align: center;

      .icon-iconfontsousuo {
        font-size: 25px;
        color: #999;
      }
    }
  }
}
.nav_right {
  width: 52px;
  height: 60px;

  text-align: center;

  line-height: 60px;
  .icon-xiaolian {
    font-size: 24px;
    color: #555;
  }
}
//总导航
.big_nav {
  width: 100%;
  margin-top: 60px;
  height: 60px;

  ul {
    width: 100%;
    display: flex;
    height: 60px;
    white-space: nowrap;
    overflow-x: scroll;
    li {
      height: 60px;

      line-height: 60px;
      text-align: center;
      margin: 0 10px;
      line-height: 68px;
      text-align: center;
      font-size: 18px;
    }
  }
}

.swipe_img {
  width: 375px;
  height: 188px;
}
// .swipe-magin {
//   margin-top: 60px;
// }

// 小导航
.xiao_nav {
  height: 75px;
  margin-top: 10px;
  display: flex;
  ul {
    display: flex;
  }
  li a {
    width: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.tuijian_ul {
  li {
    margin-top: 10px;
    height: 230px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

// 下面的列表
.list_ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  li {
    margin-top: 5px;
    .one1 {
      width: 184px;
      height: 184px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.list_ul li .two2 {
  padding: 15px 0 0 10px;
  width: 143px;
  height: 85px;
  .brief {
    margin: 5px 0;
    font-size: 14px;
    color: #666;
  }
  .title {
    font-size: 16px;
    color: #333;
    margin-top: 3px;
  }
  .price {
    color: hsl(2, 97%, 55%);
  }
}
</style>