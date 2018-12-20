<template>
  <div id="header">
    <div class="container">
      <a href="/">
        <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt> 
      </a>
      <ul>
        <a href="/"><li>首页</li></a>
        <a href="/"><li>新手入门</li></a>
        <a href="/"><li>API</li></a>
        <a href="/"><li>关于</li></a>
        <a href="/"><li>注册</li></a>
        <a href="/"><li>登录</li></a>
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
    margin: 0 5%;
    padding: 10px 0;

    a {
      cursor: pointer;
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
    li:hover {
      color: #fff;
    }
  }
}
</style>