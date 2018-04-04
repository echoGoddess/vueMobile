<template>
  <div class="home">
    <x-header :title="this.$route.name" :left-options="{showBack: false}" :right-options="{showMore:true}" @on-click-more="toList"></x-header>
    <swiper loop auto :list="swipes" :index="swipeIndex" @click.native="toList"></swiper>
    <ul class="tabs">
      <li v-for="(item,index) of tabs" :key="'tab'+index" @click.stop.prevent="toList" >
        <i></i>
        <span>{{item}}</span>
      </li>
    </ul>
    <div class="flexibleSpans">
      <span class="btnFlexible">flexible测试</span>
      <span class="btnFlexible">flexible测试</span>
    </div>
  </div>
</template>
<script>
import RoutesName from '@/core/routerNames'
import { XHeader, Swiper } from 'vux'

export default {
  data: function () {
    return {
      tabs: ['看案例', '找设计', '找装修', '挑尖货', '逛商场'],
      swipeIndex: 0,
      swipes: [
        {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/1.jpg',
          title: '送你一朵fua'
        },
        {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/2.jpg',
          title: '送你一辆车'
        },
        {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/3.jpg',
          title: '送你一次旅行',
          fallbackImg: 'https://static.vux.li/demo/3.jpg'
        }
      ]
    }
  },
  components: {
    XHeader,
    Swiper
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
  beforeCreate () {
    document.title = this.$route.name
  },
  created () {
    console.log('获取接口数据，初始化页面')
    // this.initData();
  }
}
</script>
<style  lang="less" scoped>
div {
  font-size: 24px;
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
.flexibleSpans {
  font-size: 0;
  span {
    font-size: 24px;
    display: inline-block;
    width: 375px;
    height: 40px;
    line-height: 40px;
    background: pink;
    box-shadow: 10px 10px 5px #888888;
  }
}
</style>
