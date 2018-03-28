<template>
  <div class="home">
    <h1>主页</h1>
    <router-link to="/Login">toLogin</router-link>
  </div>
</template>
<script>
  export default {
    data:{
      content:'主页'
    },
    methods:{}
  }
</script>
<style scoped>
  div {
    font-size: 40px;
  }
  a{
    border:2px solid #ddd;
    line-height:24px;
    color:tomato;
    background: #fff;
    border-radius: 14px;
    text-decoration: none;
  }
</style>
