<template>
  <div class>
    <el-form :label-position="labelPosition" label-width="80px" :model="shop">
      <el-form-item label="选择分类">
        <el-select
          v-model="shop.kind"
          placeholder="请选择分类"
          style="width: 400px"
        >
          <el-option
            v-for="item in shoplist"
            :key="item._id"
            :label="item.kind"
            :value="item._id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="商品名称">
        <el-input v-model="shop.name" style="width: 400px" />
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input v-model="shop.price" style="width: 400px" />
      </el-form-item>
      <el-form-item label="简介">
        <el-input v-model="shop.titile" style="width: 400px" />
      </el-form-item>
      <el-form-item label="详情">
        <el-input v-model="shop.detial" style="width: 400px" />
      </el-form-item>
      <el-form-item label="商品图片">
        <el-upload
          action="aaa"
          list-type="picture-card"
          :http-request="uploadImage"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus" />
        </el-upload>
        <el-dialog
          :visible.sync="dialogVisible"
        >
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>

        <!-- <el-upload
          class="avatar-uploader"
          action="aaa"
          :http-request="uploadImage"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imgUrl" :src="imgUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon" />
        </el-upload> -->
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="addshop">添加</el-button>
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
      dialogImageUrl: '',
      imgList: [],
      dialogVisible: false,
      // imgUrl: '',
      labelPosition: 'top',
      shop: {
        name: '',
        titile: '', // 简介
        price: '', // 价格
        detial: '', // 详情
        kind: ''
      },
      shoplist: []
    }
  },
  computed: {},
  watch: {},
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
  methods: {
    // 获取全部城市列表
    getkind() {
      this.$store.dispatch('shop/getkind').then((res) => {
        console.log(res)
        this.shoplist = res.Kindlist
      })
    },

    // 上传图片限制
    // handleAvatarSuccess(res, file) {
    //   this.imageUrl = URL.createObjectURL(file.raw)
    // },
    // beforeAvatarUpload(file) {
    //   const isJPG = file.type === 'image/jpeg'
    //   const isLt2M = file.size / 1024 / 1024 < 2

    //   if (!isJPG) {
    //     this.$message.error('上传头像图片只能是 JPG 格式!')
    //   }
    //   if (!isLt2M) {
    //     this.$message.error('上传头像图片大小不能超过 2MB!')
    //   }
    //   return isJPG && isLt2M
    // },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    // 上传图片
    uploadImage(image) {
      console.log(image)
      const formdata = new FormData()
      formdata.append('avatar', image.file)
      this.$store.dispatch('shop/upload', formdata).then((res) => {
        console.log(res)
        this.imgList.push(res.imgUrl)
        console.log(this.imgList)
      })
    },
    // 重置表单
    chongzhi() {
      this.imgUrl = ''
      this.shop.name = ''
      this.shop.titile = ''
      this.shop.price = ''
      this.shop.detial = ''
      this.shop.kind = ''
    },

    // 添加表单
    addshop() {
      const obj = {
        imgUrl: this.imgList,
        name: this.shop.name,
        titile: this.shop.titile,
        price: this.shop.price,
        detial: this.shop.detial,
        kind: this.shop.kind
      }
      this.$store.dispatch('shop/addshop', obj).then((res) => {
        this.$message({
          message: res.msg,
          type: 'success'
        })
        this.$router.push({ path: '/shop/list' })
      })
    }
  }

}
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
