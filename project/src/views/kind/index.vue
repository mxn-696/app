<template>
  <div id="main">
    <van-nav-bar
      title="分类"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
      class="top"
    >
      <van-icon name="search" slot="right" @click="$router.push('/search')" />
    </van-nav-bar>
    <div class="bottom">
      <div class="left" id="floorNav">
        <van-sidebar v-model="activeKey" @change="onChange">
          <van-sidebar-item
            v-for="(item, index) in leftList"
            :title="item.kind"
            :key="index"
          />
        </van-sidebar>
      </div>
      <div class="right bbb" @scroll="getactive()">
        <ul id="content">
          <li v-for="(items, index) in rightList" :key="index">
            <p class="titel">{{ items.titel }}</p>
            <div class="right-main">
              <div
                class="right-main-case"
                v-for="(item, index) in items.list"
                :key="index"
                @click="$router.push('/dail/' + item._id)"
              >
                <img :src="item.imgUrl[0]" alt="" />
                <p>{{ item.name }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  components: {},
  data() {
    return {
      activeKey: 0,
      leftList: [],
      rightList: {},
      scrollList: [],
    };
  },
  computed: {
    
  },
  watch: {},
  methods: {
    onChange(index) {
      $(".bbb").scrollTop(this.scrollList[index]);
    },
    onClickRight() {},
    getkind() {
      this.$http.get("/kind/getkind").then((res) => {
        this.leftList = res.Kindlist;
      });
    },
    getlist() {
      this.$http.get("/kind/all").then((res) => {
        // console.log(res)
        var list = res.list;
        var rightList = {};
        for (var i = 0; i < list.length; i++) {
          var a = String(list[i].kind.kind);
          // console.log(a)
          if (rightList[a] == undefined) {
            rightList[a] = {};
            rightList[a].titel = a;
            rightList[a].list = [];
            rightList[a].list.push(list[i]);
          } else {
            rightList[a].list.push(list[i]);
          }
        }
        this.rightList = rightList;
        var scrollList = [];
        this.$nextTick(function () {
          $("#content li").each(function () {
            scrollList.push($(this).offset().top - 46);
          });
          this.scrollList = scrollList;
          console.log(this.scrollList)
        });
      })
      ;
    },
    getactive(){
      for(var i=0;i<this.scrollList.length;i++){
        if($(".bbb").scrollTop()>=this.scrollList[i]&&$(".bbb").scrollTop()<this.scrollList[i+1]){
          this.activeKey=i
        }
        
      }
    }
  },
  created() {
    this.getkind();
    this.getlist();
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
};
</script>
<style lang='scss' scoped>
#main {
  .bottom {
    display: flex;
    height: calc(100% - 46px);
    .left {
      overflow: auto;
    }
    .right {
      flex: 1;
      overflow-y: auto;
      .titel {
        font-size: 0.2rem;
        font-weight: 800;
        text-align: center;
        line-height: 0.4rem;
        margin-bottom: 0.1rem;
      }
      .right-main {
        display: flex;
        flex-wrap: wrap;
        .right-main-case {
          width: 0.8rem;
          margin: 0.05rem;
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>