<template>
  <div class>
    <el-row>
      <el-col :span="24">
        <el-button type="primary" @click="add">添加</el-button>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="index" width="50" />
          <el-table-column prop="name" label="商品名称" />
          <el-table-column prop="price" label="商品价格" />
          <el-table-column prop="imgUrl" label="图片">
            <template slot-scope="scope">
              <img :src="scope.row.imgUrl[0]">
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.row._id)">编辑</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.row._id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="total" :page-size="pagesize" :current-page="currentpage" @current-change="changePage" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Shoplist',
  components: {},
  data() {
    return {
      tableData: [],
      total: 0,
      pagesize: 3,
      currentpage: 1
    }
  },
  computed: {},
  watch: {},
  created() {
    this.getlist(this.pagesize, this.currentpage)
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
    getlist(pagesize, currentpage) {
      this.$store.dispatch('shop/getlist', {
        pagesize,
        currentpage
      }).then((res) => {
        console.log(res)
        if (res.list.length === 0) {
          this.currentpage--
          this.getlist(this.pagesize, this.currentpage)
        }
        this.tableData = res.list
        console.log(this.tableData)
        this.total = res.total
      })
    },
    add() {
      this.$router.push({ path: '/shop/add' })
    },
    handleEdit(id) {
      this.$router.push({
        path: '/shop/edit/' + id
      })
    },
    handleDelete(id) {
      this.$confirm('确定要删除此数据吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$store.dispatch('shop/delshop', id).then((res) => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            this.getlist(this.pagesize, this.currentpage)
          })
        })
        .catch(() => {})
    },
    changePage(page) {
      this.currentpage = page
      this.getlist(this.pagesize, this.currentpage)
    }

  }
}
</script>
<style lang='scss' scoped>
img{
    width: 100px;
    height: 80px;
}
</style>
