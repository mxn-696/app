<template>
  <div>
    <van-nav-bar
      title="新增地址"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-address-edit
      :area-list="areaList"
      :show-postal="false"
      :show-delete="false"
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import area from "@/areaData";
import {Toast} from "vant";
import{getUser}from '@/utils/auth'
export default {
  components: {},
  data() {
    return {
      areaList: area,
      searchResult: [],
      adslength:0
    };
  },
  computed: {
    [Toast.name]:Toast,

  },
  watch: {},
  methods: {
    onClickLeft() {
      Toast("返回");
      this.$router.go(-1);
    },
    onSave(content) {
      Toast("save");
      var obj={
        id:this.adslength,
        name:content.name,
        addressDetail:content.addressDetail,
        areaCode:content.areaCode,
        city:content.city,
        country:content.country,
        county:content.county,
        isDefault:content.isDefault,
        postalCode:content.postalCode,
        tel:content.tel,
        province:content.province,
      }
      this.$http.post('/mine/addads',{
          username:getUser(),
          obj
      }).then(res=>{
          if(res){
            this.$router.push('/mine/address')
          }
      })
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
    getAdsLength(){
        this.$http.get('/mine/allads',{
            params:{
                username:getUser()
            }
        }).then(res=>{
            this.adslength=(res.list.length)/2;
        })
    }
  },
  created() {
      this.getAdsLength()
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