<template>
  <div class="login">
    <mt-header fixed title="我是登陆页">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <h1>{{content}}</h1>
    <div>
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <mt-button  class="btnLogin" type="primary" size="large" @click.native="toHome">登陆</mt-button>
    </div>
  </div>
</template>
<script>
import LoginApi from '../../api/login.js'

export default {
  name: 'login',
  data () {
    return {
      content: '登陆页',
      username: '',
      password: ''
    }
  },
  methods: {
    toHome () {
      this.$router.push({ name: 'Home' })
    }
  },
  beforeCreate () {}, // 开始加载
  created () {}, // 结束加载
  mounted () {
    LoginApi.fetchData({ city: '上海市', id: 30 })
  }, // dom渲染完成，请求数据，更新data
  beforeDestroy () {}, // 销毁前
  destroyed () {} // 销毁
}
</script>
<style scoped>
div {
  font-size: 30px;
}
.btnLogin {
  margin-top: 20px;
}
</style>
