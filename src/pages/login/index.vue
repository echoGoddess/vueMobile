<template>
  <div class="login">
    <h1>{{content}}</h1>
    <button  v-on:click="toHome">toHome</button>
  </div>
</template>
<script>
  export default {
    name: 'login',
    data() {
      return {
        content: '登陆页'
      }
    },
    methods: {
      toHome() {
        this.$router.push({name: 'Home'});
      }
    }
  };
</script>
<style scoped>
  div {
    font-size: 40px;
  }
  button{
    border:2px solid #ddd;
    line-height:24px;
    color:tomato;
    background: #fff;
    border-radius: 14px;
  }
</style>
