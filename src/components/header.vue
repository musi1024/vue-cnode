<template>
    <div id="header"> 
        <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt="">
        <ul>
            <li>首页</li>
            <li>新手入门</li>
            <li>API</li>
            <li>关于</li>
            <li>注册</li>
            <li>登录</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style lang='scss' scoped>
    #header {
        color:red;
        li {
            border: 1px solid green;
        }
    }
</style>