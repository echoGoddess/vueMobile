<template>
  <div class="login">
    <h1>{{this.$route.name}}</h1>
    <group>
      <x-input v-model="username" title="姓名" name="username" placeholder="请输入姓名" is-type="china-name"></x-input>
      <x-input v-model="password" title="密码" type="password" name="password" placeholder="请输入密码"></x-input>
    </group>
    <x-button class="btnLogin"  @click.native="toHome" type="primary"> 登陆</x-button>
  </div>
</template>
<script>
import { XInput,Group,XButton } from "vux";
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
  components:{
    XInput,
    Group,
    XButton
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
  font-size: 24px;
}
.btnLogin {
  width: 90%;
  margin: 20px auto;
}
</style>
