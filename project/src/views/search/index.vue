<template>
  <div id="main">
    <div class="top">
      <van-nav-bar title="" left-text="返回" left-arrow @click.native="$router.back()">
        <van-icon name="search" slot="right" />
      </van-nav-bar>
    </div>
    <div class="search">
        <mt-search v-model="value">
            <mt-cell
                v-for="(item, index) in getResoutItem"
                :title="item.title"
                :key="index"
                @click.native="$router.push('/dail/'+item.id)"
            >
            </mt-cell>
            </mt-search>
    </div>
    
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      value: "",
      list: [
        {
          title: "小米NOTE3",
          id: 1001,
        },
        {
          title: "小米MAX2",
          id: 1002,
        },
        {
          title: "小米MIX2",
          id: 1003,
        },
        {
          title: "小米电视4A",
          id: 1004,
        },
        {
          title: "小米体温计",
          id: 1005,
        },
        {
          title: "小米笔记本",
        id: 1006,
        },
        {
          title: "红米NOTE5",
          id: 1007,
        },
      ],
    };
  },
  computed: {
       getResoutItem() {
        let result = []

        if(this.nowInput == ''){
            return result
        }

        for(var i=0; i<this.list.length; i++){
          if(this.list[i].title.toLowerCase().indexOf(this.value.toLowerCase()) != -1){
            result.push(this.list[i])
          }
        }
        console.log(result)
        return result
      }
  },
  watch: {},
  methods: {
      getlist(){
          this.$http.get('/kind/all').then(res=>{
              console.log(res)
              var list=[];
              for(var i=0;i<res.list.length;i++){
                  list.push({
                      title:res.list[i].name,
                      id:res.list[i]._id
                  })
              }
              this.list=list
          })
          
      }
  },
  created() {
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
#main{
    display: flex;
    flex-direction: column;
    .search{
        flex: 1;
        .mint-search{
            height: 100%;
            position: relative;
        }
    }
}

</style>