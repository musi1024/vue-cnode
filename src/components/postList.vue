<template>
  <div id='postList'>
    <header>
      <span>全部</span>
      <span>精华</span>
      <span>分享</span>
      <span>问答</span>
      <span>招聘</span>
    </header>
    <ul>
      <li v-for="post in posts" :key='post.id'>
        <img :src="post.author.avatar_url" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'PostList',
    data() {
      return { 
        posts: []
      }
    },
    created() {
      this.getData()
    },
    methods: {
      getData() {
        this.request('/topics', 'GET', {
            page: 1,
            limit: 20
          })
          .then(res => {
            console.log('请求数据成功')
            this.posts = res.data
          })
          .catch(err => {
            console.log('请求数据失败')
            console.log(err)
          })
      }
    }
  }

</script>

<style lang='scss' scoped>
  #postList {
    margin: 14px 5% 0;
    background: #F6F6F6;
    header {
      color: #80BD01;
    }
    img {
      width: 30px;
    }
  }

</style>
