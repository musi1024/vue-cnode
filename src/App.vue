<template>
  <div id="app">
    <Header></Header>
    <PostList></PostList>
  </div>
</template>

<script>
import Header from './components/header'
import PostList from './components/postList'

export default {
  name: 'App',
  components: {
    Header, PostList
  }
}
</script>

<style lang='scss'>
@import './assets/common';
#app {
  background: #E1E1E1;
  padding-bottom: 14px;
}
</style>
