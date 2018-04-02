<template>
  <div class="home">
    <mt-header fixed :title="this.$route.name">
      <mt-button icon="more" slot="right" @click="toList"></mt-button>
    </mt-header>
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for="(item,index) of swipers" :key="'swiper'+index" :class="item" @click.native="toList">{{item}}</mt-swipe-item>
    </mt-swipe>
    <ul class="tabs">
      <li v-for="(item,index) of tabs" :key="'tab'+index" @click.stop.prevent="toList" >
        <i></i>
        <span>{{item}}</span>
      </li>
    </ul>
    <router-view />
  </div>
</template>
<script>
import RoutesName from '@/core/routerNames'

export default {
  data: function () {
    return {
      swipers: ['swiper1', 'swiper2', 'swiper3', 'swiper4'],
      tabs: ['看案例', '找设计', '找装修', '挑尖货', '逛商场']
    }
  },
  methods: {
    toList () {
      this.$router.push({ name: RoutesName.ROUTE_LIST })
    },
    initData (data) {
      const { swipers, tabs } = data
      Object.assign(this, swipers, tabs)
    }
  },
  created () {
    console.log('获取接口数据，初始化页面')
    // this.initData();
  }
}
</script>
<style scoped>
div {
  font-size: 24px;
}
.toLoginPage {
  border: 2px solid #ddd;
  line-height: 24px;
  color: tomato;
  background: #fff;
  border-radius: 14px;
  text-decoration: none;
}
.mint-swipe {
  height: 200px;
  margin-top: 40px;
  background: tomato;
}
.swiper1 {
  background: tomato;
}
.swiper2 {
  background: yellowgreen;
}
.swiper3 {
  background: darkcyan;
}
.swiper4 {
  background: hotpink;
}
.tabs {
  display: flex;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: nowrap;
  font-size: 15px;
}
li {
  flex: 1 0 auto;
  padding: 10px 0;
}
li i {
  display: block;
  width: 30px;
  height: 30px;
  background: pink;
  margin: 5px auto;
  border-radius: 50%;
}
</style>
