<!--  -->
<template>
  <div>
      <van-nav-bar
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      
    />
    <van-form @submit="onSubmit">
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
  <van-field
    v-model="username"
    name="用户名"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit" @click.native="regbtn">
      注册
    </van-button>
  </div>
</van-form>

  </div>
</template>

<script>
import { Form, Field, Button} from 'vant'
import { NavBar } from "vant";
import { Toast } from 'vant';
export default {
    name:'Regss',
  data() {
    return {
     username: '',
      password: '',
       imgUrl: '',
    };
  },

  //方法集合
  methods: {
      regbtn(){
          this.$http.post('/mine/zhuce',{
              username:this.username,
              password:this.password,
              imgUrl:this.imgUrl
              }).then(res=>{
              console.log(res)
              if(res.success==1){
                  alert('注册成功')
                  this.$router.push({
                      path:'/mine/login'
                  })
              }
          })
      },
      onClickLeft() {
      Toast('返回')
      this.$router.push({
          path:'/mine/login'
      })
      },
    onSubmit() {
    //   console.log("submit", values);
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
    //上传头像
    uploadImage(image) {
      const formdata = new FormData()
      formdata.append('avatar', image.file)
      this.$http.post('/login/upload', formdata).then(res => {
        this.imgUrl = res.imgUrl
      })
    },
  },
    components:{
        [Form.name]: Form,
        [Field.name]: Field,
        [Button.name]: Button,
        [NavBar.name]:NavBar,
        [Toast.name]:Toast
    },

  created() {},


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