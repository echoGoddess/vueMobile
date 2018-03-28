<template>
  <div class="home">
    <mt-header fixed title="我是主页">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <h1>主页</h1>
    <router-link class="toLoginPage" to="/Login">toLoginPage</router-link>
  </div>
</template>
<script>
import { Header } from "mint-ui";

export default {
  data: {
    content: "主页"
  },
  methods: {}
};
</script>
<style scoped>
div {
  font-size: 40px;
}
.toLoginPage {
  border: 2px solid #ddd;
  line-height: 24px;
  color: tomato;
  background: #fff;
  border-radius: 14px;
  text-decoration: none;
}
</style>
