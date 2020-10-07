<!--  -->
<template>
  <div>
    <van-nav-bar left-text="返回" title="修改地址" left-arrow @click-left="onClickLeft" />
    <van-address-edit
      :area-list="areaList"
      :show-postal="false"
      show-delete
      show-set-default
      show-search-result
      :address-info="addressInfo"
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
import{getUser}from '@/utils/auth'
import area from '@/areaData'
export default {
  data() {
    return {
      areaList:area,
      searchResult: [],
      addressInfo:{},
    };
  },

  //方法集合
  methods: {
    onClickLeft() {
      Toast("返回");
      this.$router.go(-1)
    },
    onSave(content) {
      Toast("save");
      console.log(content)
      var obj={
        id:content.id,
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
      this.$http.put('/mine/putads',{
          username:getUser(),
          obj
      }).then(res=>{
          console.log(res)
          if(res.msg){
              Toast(res.msg)
              this.$router.push('/mine/address')
          }
      })
    },
    onDelete() {
        this.$http.delete('/mine/delads',{
            params:{
                 username:getUser(),
            id:this.$route.params.id
            }  
        }).then(res=>{
          console.log(res)
            if(res){
                this.$router.push('/mine/address')
            }
            
        })
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
    getthisads(){
        this.$http.get('/mine/getthisads',{
            params:{
                username:getUser(),
                id:this.$route.params.id
            }
        }).then(res=>{
            console.log(res)
            this.addressInfo=res.data
        })
    }
  },
  components: {
      
  },

  created() {
      this.getthisads()
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
</style>