<template>
  <div>
    <x-header :title="this.$route.name" :right-options="{showMore:true}" @on-click-back="back"></x-header>
    <tab :line-width=2 active-color='#fc378c' v-model="selectedTabIndex">
      <tab-item class="vux-center" :selected="selectedTab === item" v-for="(item, index) in tabs" @click="selectedTab = item" :key="index">{{item}}</tab-item>
    </tab>
    <swiper v-model="selectedTabIndex" :show-dots="false" height="400px" >
      <swiper-item v-for="(item, index) in lists" :key="index">
        <ul>
          <li v-for="(val,index) in item" :key="index" @click="detail(val)">{{val}}</li>
        </ul>
      </swiper-item>
    </swiper>
     <div v-transfer-dom>
      <alert v-model="alertShow" title="详情" @on-show="onShow" @on-hide="onHide"> 商品信息:{{selectedItem}}</alert>
    </div>
  </div>
</template>
<script>
import RouterNames from '@/core/routerNames'
import {
  XHeader,
  Tab,
  TabItem,
  Swiper,
  SwiperItem,
  Alert,
  TransferDomDirective as TransferDom
} from 'vux'

export default {
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Alert
  },
  data: function () {
    return {
      selectedTabIndex: 0,
      selectedTab: '精选',
      tabs: ['精选', '美食', '电影', '酒店', '外卖'],
      lists: [
        ['精选1', '精选2', '精选3', '精选4', '精选5', '精选6', '精选7'],
        ['美食1', '美食2', '美食3', '美食4', '美食5', '美食6', '美食7'],
        ['电影1', '电影2', '电影3', '电影4', '电影5', '电影6', '电影7'],
        ['酒店1', '酒店2', '酒店3', '酒店4', '酒店5', '酒店6', '酒店7'],
        ['外卖1', '外卖2', '外卖3', '外卖4', '外卖5', '外卖6', '外卖7']
      ],
      selectedItem: '',
      alertShow: false
    }
  },
  beforeCreate () {
    document.title = this.$route.name
  },
  computed: {},
  methods: {
    back () {
      this.$router.back(-1)
    },
    detail (val) {
      this.selectedItem = val
      this.alertShow = true
    },
    onShow () {
      console.log('onShow')
    },
    onHide () {
      console.log('onHide')
      if (this.selectedItem) {
        this.$router.push({
          name: RouterNames.ROUTE_DETAIL,
          params: { name: this.selectedItem }
        })
      }
    }
  },
  created: function () {}
}
</script>
<style lang="less" scoped>
@import "~vux/src/styles/1px.less";
@import "~vux/src/styles/center.less";

.tab-swiper {
  background-color: #fff;
  height: 100px;
}
ul {
  list-style: none;
  padding: 0;
  li {
    border: 1px solid #eee;
    line-height: 50px;
  }
}
</style>
