<template>
  <div class="">
    <div class="">
      <van-nav-bar
        title="我的收货地址"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
      />
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import{getUser}from '@/utils/auth'
export default {
  components: {},
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          isDefault: true,
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号",
        },
      ],
    };
  },
  computed: {
    [Toast.name]: Toast,
    
  },
  watch: {},
  methods: {
    onAdd() {
      //   Toast("新增地址");
      this.$router.push({
        path: "/mine/address/add",
      });
    },
    onEdit(item, index) {
      Toast("编辑地址:" + index);
      this.$router.push({
        path: "/mine/address/edit/"+index,
      });
    },
    onClickLeft() {
      Toast("返回");
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("按钮");
    },
    getadslist(){
        this.$http.get('/mine/allads',{
            params:{
                username:getUser()
            }
        }).then(res=>{
            var adslist=[]
            for(var i=0;i<res.list.length;i+=2){
                adslist.push(res.list[i])
            }
            for(var j=0;j<adslist.length;j++){
                adslist[j].address=adslist[j].province+adslist[j].city+adslist[j].county+adslist[j].addressDetail
            }
            this.list=adslist
        })
    }
  },
  created() {
      this.getadslist()
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
</style>