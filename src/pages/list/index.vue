<template>
  <div>
    <x-header :title="this.$route.name" :right-options="{showMore:true}" @on-click-back="back"></x-header>
    <tab :line-width=2 active-color='#fc378c' v-model="selectedIndex">
      <tab-item class="vux-center" :selected="selected === item" v-for="(item, index) in tabs" @click="selected = item" :key="index">{{item}}</tab-item>
    </tab>
    <swiper v-model="selectedIndex" :show-dots="false" height="400px" >
      <swiper-item v-for="(item, index) in lists" :key="index">
        <ul>
          <li v-for="(val,index) in item" :key="index">{{val}}</li>
        </ul>
      </swiper-item>
    </swiper>
     <!-- <div v-transfer-dom>
      <alert v-model="show" :title="$t('Congratulations')" @on-show="onShow" @on-hide="onHide"> {{ $t('Your Message is sent successfully~') }}</alert>
    </div> -->
  </div>
</template>
<script>
import { MessageBox } from "mint-ui";
import RouterNames from "@/core/routerNames";
import { XHeader, Tab, TabItem, Swiper, SwiperItem,Alert } from "vux";

export default {
  data: function() {
    return {
      selectedIndex: 0,
      selected: "精选",
      tabs: ["精选", "美食", "电影", "酒店", "外卖"],
      lists: [
        ["精选1", "精选2", "精选3", "精选4", "精选5", "精选6", "精选7"],
        ["美食1", "美食2", "美食3", "美食4", "美食5", "美食6", "美食7"],
        ["电影1", "电影2", "电影3", "电影4", "电影5", "电影6", "电影7"],
        ["酒店1", "酒店2", "酒店3", "酒店4", "酒店5", "酒店6", "酒店7"],
        ["外卖1", "外卖2", "外卖3", "外卖4", "外卖5", "外卖6", "外卖7"]
      ]
    };
  },
  components: {
    XHeader,
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Alert
  },
  beforeCreate() {
    document.title = this.$route.name;
  },
  computed: {},
  methods: {
    back() {
      this.$router.back(-1);
    },
    detail(val) {
      MessageBox("详情", `商品信息:${val}`).then(() => {
        this.$router.push({
          name: RouterNames.ROUTE_DETAIL,
          params: { name: val }
        });
      });
    }
  },
  created: function() {}
};
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
