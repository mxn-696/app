<!--  -->
<template>
<div class=''>
  <!-- 轮播图 -->
        <mt-swipe :auto="4000" style="height:188px" class="swipe-magin">
          <mt-swipe-item style="height:188px">
            <img src="../../../assets/1.jpg" alt class="swipe_img" />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../../../assets/2.jpg" alt class="swipe_img" />
          </mt-swipe-item>
        </mt-swipe>
        <!-- 轮播图结束 -->
        <!-- 畅销产品 -->
        <h2 class="big_h2">畅销产品</h2>
         <!-- 下面的列表 -->
        <ul class="list_ul">
          <li v-for="(item3,index) in list_ulList" :key="index">
            <div class="one1">
              <img :src="item3.imgurl" alt />
            </div>
            <div class="two2">
              <div class="title">{{item3.title}}</div>
              <div class="brief">{{item3.brief}}</div>
              <div class="price">{{item3.price}}</div>
            </div>
          </li>
        </ul>
</div>
</template>

<script>
 

export default {
data() {
//这里存放数据
return {
   list_ulList: [
        {
           imgurl: require("../../../assets/timg.jpg"),
          title: "九号平衡车",
          brief: "年轻人的酷玩具",
          price: "￥1999",
        },
        {
           imgurl: require("../../../assets/timg.jpg"),
          title: "九号平衡车",
          brief: "年轻人的酷玩具",
          price: "￥1999",
        },
        {
          imgurl: require("../../../assets/timg.jpg"),
          title: "九号平衡车",
          brief: "年轻人的酷玩具",
          price: "￥1999",
        },
        {
          imgurl: require("../../../assets/timg.jpg"),
          title: "九号平衡车",
          brief: "年轻人的酷玩具",
          price: "￥1999",
        },
        {
          imgurl: require("../../../assets/timg.jpg"),
          title: "九号平衡车",
          brief: "年轻人的酷玩具",
          price: "￥1999",
        },
        {
          imgurl: require("../../../assets/timg.jpg"),
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
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
components: {},
}
</script>
<style lang="scss" scoped>
.swipe_img {
  width: 375px;
  height: 188px;
};
.big_h2{
  margin-top:10px;
  height:50px;
  font-size:26px;
  line-height: 50px;
  margin-left:20px;
  font-family: Arial, Helvetica, sans-serif;
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