<template>
  <div class>
    <el-form
      :label-position="labelPosition"
      label-width="80px"
      :model="fruit"
    >
      <el-form-item label="选择分类">
        <el-select
          v-model="fruit.kind"
          placeholder="请选择分类"
          style="width: 400px"
        >
          <el-option :label="item.kind" :value="item._id" v-for='item in Fruitlist' :key='item._id'></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品名称">
        <el-input
          v-model="fruit.name"
          style="width: 400px"
        ></el-input>
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input
          v-model="fruit.price"
          style="width: 400px"
        ></el-input>
      </el-form-item>
      <el-form-item label="简介">
        <el-input
          v-model="fruit.titile"
          style="width: 400px"
        ></el-input>
      </el-form-item>
      <el-form-item label="详情">
        <el-input
          v-model="fruit.detial"
          style="width: 400px"
        ></el-input>
      </el-form-item>
      <el-form-item label="商品图片">
        <el-upload
          class="avatar-uploader"
          action="aaa"
          :http-request="uploadImage"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imgUrl" :src="imgUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="addfruit">添加</el-button>
        <el-button @click="chongzhi">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      imgUrl: "",
      labelPosition: "top",
      fruit: {
        name: "",
        titile: "",//简介
        price: "",//价格
        detial: '',//详情
        kind:'',
      },
      Fruitlist:[]
    };
  },
  computed: {},
  watch: {},
  methods: {

    //获取全部城市列表
    getkind(){
      this.$store.dispatch('fruit/getkind').then(res=>{
        console.log(res)
        this.Fruitlist=res.Kindlist
      })
    },
    
    //上传图片限制
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },

    //上传图片
    uploadImage(image) {
      let formdata=new FormData();
      formdata.append('avatar',image.file);
      this.$store.dispatch('fruit/upload',formdata).then(res=>{
        this.imgUrl=res.imgUrl
      })
    },
    //重置表单
    chongzhi(){
      this.imgUrl='',
      this.fruit.name='',
      this.fruit.titile='',
      this.fruit.price='',
      this.fruit.detial='',
      this.fruit.kind=''
    },

    //添加表单
    addfruit() {
      const obj = {
        imgUrl:this.imgUrl,
        name:this.fruit.name,
        titile:this.fruit.titile,
        price:this.fruit.price,
        detial:this.fruit.detial,
        kind:this.fruit.kind
      };
      this.$store.dispatch('fruit/addfruit',obj).then(res=>{
         this.$message({
          message: res.msg,
          type: "success",
        });
        this.$router.push({ path: "/fruit/list" });
      })

    },




  },
  created() {
    this.getkind()
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

<style >
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
