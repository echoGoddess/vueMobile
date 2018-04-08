<template>
  <div class="login">
    <h1>{{this.$route.name}}</h1>
    <group>
      <x-input v-model="username" title="姓名" name="username" placeholder="请输入姓名" is-type="china-name"></x-input>
      <x-input v-model="password" title="密码" type="password" name="password" placeholder="请输入密码"></x-input>
    </group>
    <x-button class="btnLogin"  @click.native="toHome" type="primary"> 登陆</x-button>
     <div v-transfer-dom>
      <loading :show="showLoading" text="请求中"></loading>
    </div>
     <div v-transfer-dom>
      <alert v-model="showAlert" title="登陆失败"></alert>
    </div>
  </div>
</template>
<script>
import { XInput, Group, XButton, Loading, Alert, TransferDom } from 'vux'
// import LoginApi from '@/api/login.js'
import RoutesName from '@/core/routerNames'

export default {
  directives: {
    TransferDom
  },
  components: {
    XInput,
    Group,
    XButton,
    Loading,
    Alert
  },
  data () {
    return {
      username: '',
      password: '',
      showLoading: false,
      showAlert: false
    }
  },
  methods: {
    toHome () {
      // 模拟接口请求效果
      this.showLoading = true
      this.timer = setTimeout(() => {
        this.showLoading = false
        this.$router.push({ name: RoutesName.ROUTE_HOME })
      }, 1000)
      // LoginApi.fetchData({ city: "上海市", id: 30 })
      //   .then(data => {
      //     if (data && data.code === 200) {
      //       this.$router.push({ name: RoutesName.ROUTE_HOME });
      //     } else {
      //       this.showAlert = true;
      //     }
      //     this.showLoading = false;
      //   })
      //   .catch(() => {
      //     this.showLoading = false;
      //   });
    }
  },
  beforeCreate () {
    document.title = this.$route.name
  },
  created () {}, // 结束加载
  mounted () {}, // dom渲染完成，请求数据，更新data
  beforeDestroy () {}, // 销毁前
  destroyed () {
    if (this.timer) this.timer = null
  } // 销毁
}
</script>
<style lang="less" scoped>
div {
  font-size: 24px;
}
.btnLogin {
  width: 90%;
  margin: 20px auto;
}
</style>
