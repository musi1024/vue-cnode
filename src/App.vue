<template>
  <div id="app">
    <Header></Header>
  </div>
</template>

<script>
import Header from './components/header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang='scss'>
@import './assets/common';
.app {
  background: #E1E1E1;
}
</style>
