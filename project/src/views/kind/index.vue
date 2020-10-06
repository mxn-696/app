<template>
  <div id="main">
    <div class="left">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          v-for="(item, index) in leftList"
          :title="item.kind"
          :key="index"
        />
      </van-sidebar>
    </div>
    <div class="right">
    <ul>
        <li v-for="(items,index) in rightList" :key="index">
            <p class="titel">{{items.titel}}</p>
            <div class="right-main">
                <div class="right-main-case" v-for="(item,index) in items.list" :key="index">
                    <img :src="item.imgUrl" alt="">
                    <p>{{item.name}}</p>
                </div>
            </div>
        </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      activeKey: 0,
      leftList: [],
      rightList:{}
    };
  },
  computed: {},
  watch: {},
  methods: {
    getkind() {
      this.$http.get("/kind/getkind").then((res) => {
        this.leftList = res.Kindlist;
        console.log(this.leftList);
      });
    },
    getlist(){
        this.$http.get('/kind/all').then(res=>{
            console.log(res)
            var list=res.list
            var rightList={}
            for(var i=0;i<list.length;i++){
                var a=String(list[i].kind.kind)
                console.log(a)
                if(rightList[a]==undefined){
                    rightList[a]={};
                    rightList[a].titel=a
                    rightList[a].list=[]
                    rightList[a].list.push(list[i])
                }
                else {
                    rightList[a].list.push(list[i])
                }
            }
            this.rightList=rightList
            console.log(this.rightList)
        })
    }
  },
  created() {
    this.getkind();
    this.getlist()
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
  display: flex;
  .left{
      overflow: auto;
  }
  .right{
      flex: 1;
      overflow-y: auto;
      .titel{
          font-size: 0.2rem;
          font-weight: 800;
          text-align: center;
          line-height: 0.4rem;
          margin-bottom: 0.1rem;
      }
      .right-main{
          display: flex;
          flex-wrap: wrap;
          .right-main-case{
              width: 25%;
              img{
                  width: 100%;
              }
          }
      }
  }
}
</style>