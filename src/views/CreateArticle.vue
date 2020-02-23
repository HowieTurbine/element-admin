<template>
<el-form ref="form" :model="article" label-width="80px" @submit.native.prevent="saveArticle">
  <el-form-item label="文章标题">
    <el-input v-model="article.title"></el-input>
  </el-form-item>

  <el-form-item label="活动形式">
    <el-input type="textarea" v-model="article.body"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" native-type="submit">创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</template>

<script>
export default {
  data () {
    return {
      article: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    saveArticle () {
      this.$http.post('/articles', this.article).then(res => {
        this.$message({
          message: '文章创建成功',
          type: 'success'
        })
        this.$router.push('/articles/index')
      })
    }
  }
}
</script>
