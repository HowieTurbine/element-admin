<template>
  <el-table :data="articles">
    <el-table-column label="标题" prop="title" width="100"></el-table-column>
    <el-table-column label="内容" prop="body" width="200"></el-table-column>
    <el-table-column fixed = "right" lable="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="show(scope.row._id)" type="text" size="small">查看</el-button>
        <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
        <el-button @click="remove(scope.row._id)" size="small" type="text">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data () {
    return {
      articles: []
    }
  },
  methods: {
    fetch () {
      this.$http.get('articles').then(res => {
        this.articles = res.data
      })
    },
    edit (id) {
      this.$router.push(`/articles/${id}/edit`)
    },
    show (id) {
      console.log(id)
      this.$router.push(`/article/${id}/show`)
    },
    remove (id) {
      console.log(id)
      this.$http.delete(`articles/${id}`).then(res => {
        this.fetch()
        if (res.data.status === true) {
          this.$message({
            message: '删除成功',
            type: 'success'
          })
        }
      })
    }
  },

  created () {
    this.fetch()
  }
}
</script>

<style scoped>

</style>
