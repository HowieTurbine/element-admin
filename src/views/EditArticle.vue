<template>
  <el-form ref="form" :model="article" label-width="80px" @submit.native.prevent="editArticle">
    <el-form-item label="文章标题">
      <el-input v-model="article.title"></el-input>
    </el-form-item>

    <el-form-item label="活动形式">
      <el-input type="textarea" v-model="article.body"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">保存</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      article: {
      }
    }
  },
  methods: {
    fetch () {
      console.log(this.$route.params.id)
      this.$http.get(`/articles/${this.$route.params.id}`).then(res => {
        console.log(res.data)
        this.article = res.data
      }
      )
    },
    editArticle () {
      this.$http.put(`/articles/${this.$route.params.id}`, this.article).then(res => {
        this.$message({
          message: '文章保存成功',
          type: 'success'
        })
        this.$router.push('/articles/index')
      })
    }
  },
  created () {
    this.fetch()
  }
}
</script>
