<template>
  <div class="login">
    <mt-header fixed title="我是登陆页">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <h1>{{content}}</h1>
    <form action="">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <mt-button type="primary" size="large" @click.native="toHome">登陆</mt-button>
    </form>
  </div>
</template>
<script>
import { Header } from "mint-ui";
import { Field } from "mint-ui";
import { Button } from 'mint-ui';

export default {
  name: "login",
  data() {
    return {
      content: "登陆页",
      username:'',
      password:'',
    };
  },
  methods: {
    toHome() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>
<style scoped>
div {
  font-size: 30px;
}
button{
  margin-top:20px;
}
</style>
