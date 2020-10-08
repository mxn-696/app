<!--  -->
<template>
  <div>
    <main>
      <section>
        <mt-swipe :auto="4000" style="height:188px" class="swipe-magin">
          <mt-swipe-item style="height:188px">
            <img src="../../../assets/1.jpg" alt class="swipe_img" />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../../../assets/2.jpg" alt class="swipe_img" />
          </mt-swipe-item>
        </mt-swipe>
        <!-- 轮播图结束 -->
        <!-- 小导航 -->
        <div class="xiao_nav">
          <ul>
            <li v-for="(item,index) in list" :key="index">
              <a href>
                <img :src="item.imgurl" />
              </a>
            </li>
          </ul>
        </div>
        <!-- 小导航结束 -->
        <!-- 每日精选和超值推荐 -->
        <ul class="tuijian_ul">
          <li v-for="(item2,index) in tuijianList" :key="index">
            <img :src="item2.imgurl" />
          </li>
        </ul>
        <!-- 每日精选和超值推荐结束 -->
        <!-- 下面的列表 -->
        <ul class="list_ul">
          <router-link  tag="li" :to="{ path: '/dail/'+item3._id}" v-for="(item3,index) in list_ulList" :key="index" >
            <div class="one1">
              <img :src="item3.imgUrl" alt />
            </div>
            <div class="two2">
              <div class="title">{{item3.name}}</div>
              <div class="brief">{{item3.titile}}</div>
              <div class="price">{{item3.price}}</div>
            </div>
          </router-link>
        </ul>
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
        { imgurl: require("../../../assets/小米闪购.jpg") },
        { imgurl: require("../../../assets/手机卡.jpg") },
        { imgurl: require("../../../assets/新品发布.jpg") },
        { imgurl: require("../../../assets/活动频道.jpg") },
        { imgurl: require("../../../assets/以旧换新.jpg") },
      ],
      // big_navList:[
      //   {title:"小米手机"},
      //   {title:"Redmin红米手机"},
      //   {title:"电视"},
      //   {title:"笔记本"},
      //   {title:"家电"},
      //   {title:"路由器"},
      //   {title:"只能硬件"},
      //   {title:"服务"},
      // ],
      tuijianList: [
        { imgurl: require("../../../assets/meirijingxuan.jpg") },
        { imgurl: require("../../../assets/chaozhituijian.jpg") },
      ],
      list_ulList: [
        {
          imgurl: require("../../../assets/hongmi5.jpg"),
          title: "九号平衡车",
          brief: "年轻人的酷玩具",
          price: "￥1999",
        },
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {
    
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getall(){
      this.$http.get('/kind/all').then(res=>{
        var list_ulList=[]
        for(var i=0;i<res.list.length;i++){
          if(res.list[i].kind.kind=='耳机'){
            for(var j=0;j<10;j++){
              list_ulList.push(res.list[i])
            } 
            res.list[i].imgUrl='http://127.0.0.1:3000/'+ res.list[i].imgUrl[0]
          }
        }
        this.list_ulList=list_ulList
      })
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getall()
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  components: {
   
  },
};
</script>
<style lang="scss" scoped>
section {
  width: 100%;
  height: 100%;
  overflow: auto;
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