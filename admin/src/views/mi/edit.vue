<template>
  <div class>
    <el-form
      :label-position="labelPosition"
      label-width="80px"
      :model="shop"
    >
      <el-form-item label="选择种类">
        <el-select
          v-model="shop.kind"
          placeholder="请选择活动区域"
          style="width: 400px"
        >
          <el-option v-for="item in Kindlist" :key="item._id" :label="item.kind" :value="item._id" />
        </el-select>
      </el-form-item>
      <el-form-item label="商品名称">
        <el-input
          v-model="shop.name"
          style="width: 400px"
        />
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input
          v-model="shop.price"
          style="width: 400px"
        />
      </el-form-item>
      <el-form-item label="简介">
        <el-input
          v-model="shop.titile"
          style="width: 400px"
        />
      </el-form-item>
      <el-form-item label="详情">
        <el-input
          v-model="shop.detial"
          style="width: 400px"
        />
      </el-form-item>
      <el-form-item label="电影图">
        <el-upload
          class="avatar-uploader"
          action="aaa"
          :http-request="uploadImage"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imgUrl" :src="imgUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon" />
        </el-upload>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="putshop">提交</el-button>
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
      imgUrl: '',
      labelPosition: 'top',
      shop: {
        name: '',
        price: '',
        titile: '',
        kind: '',
        detial: ''
      },
      Kindlist: []
    }
  },
  computed: {},
  watch: {},
  created() {
    this.getthisshop()
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

    // 获取当前电影信息
    getthisshop() {
      this.$store.dispatch('shop/getthisshop', this.$route.params.id).then(res => {
        console.log(res)
        this.shop.name = res.list.name
        this.shop.price = res.list.price
        this.shop.titile = res.list.titile
        this.shop.detial = res.list.detial
        this.shop.kind = res.thisKind.kind
        this.Kindlist = res.Kindlist
        this.imgUrl = res.list.imgUrl
      })
    },

    // 上传图片限制
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },

    // 上传图片
    uploadImage(image) {
      const formdata = new FormData()
      formdata.append('avatar', image.file)
      this.$store.dispatch('shop/upload', formdata).then(res => {
        this.imgUrl = res.imgUrl
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

    // 修改表单
    putshop() {
      const obj = {
        shopid: this.$route.params.id,
        imgUrl: this.imgUrl,
        name: this.shop.name,
        titile: this.shop.titile,
        price: this.shop.price,
        kind: this.shop.kind,
        detial: this.shop.detial
      }
      console.log(obj)
      this.$store.dispatch('shop/putshop', obj).then(res => {
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
