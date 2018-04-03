<template>
  <div class="login">
    <h1>{{this.$route.name}}</h1>
    <div>
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <mt-button  class="btnLogin" type="primary" size="large" @click.native="toHome">登陆</mt-button>
    </div>
  </div>
</template>
<script>
import { Indicator, Toast } from 'mint-ui'
import LoginApi from '@/api/login.js'
import RoutesName from '@/core/routerNames'

export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    toHome () {
      Indicator.open()
      LoginApi.fetchData({ city: '上海市', id: 30 })
        .then(data => {
          if (data && data.code === 200) {
            this.$router.push({ name: RoutesName.ROUTE_HOME })
          } else {
            Toast(`登陆失败:${data.message}`)
          }
          Indicator.close()
        })
        .catch(() => {
          Indicator.close()
        })
    }
  },
  beforeCreate () {
    document.title = this.$route.name
  },
  created () {}, // 结束加载
  mounted () {}, // dom渲染完成，请求数据，更新data
  beforeDestroy () {}, // 销毁前
  destroyed () {} // 销毁
}
</script>
<style scoped>
div {
  font-size: 30px;
}
.btnLogin {
  width: 90%;
  margin: 20px auto;
}
</style>
