<template>
  <div id="header">
    <div class="container">
      <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt>
      <ul>
        <li>首页</li>
        <li>新手入门</li>
        <li>API</li>
        <li>关于</li>
        <li>注册</li>
        <li>登录</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang='scss' scoped>
#header {
  background-color: rgb(68, 68, 68);
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 64px;
  }
  img {
    width: 110px;
  }
  li {
    color: #ccc;
    display: inline-block;
    padding: 0 10px;
    font-size: 13px;
  }
}
</style>