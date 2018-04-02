<template>
  <div>
    <mt-header fixed :title="this.$route.name">
      <mt-button slot="left" icon="back" @click="back">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item v-for="item in tabs" :id="item.id" :key="item.id">{{item.name}}</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item v-for="(item, key) in lists" :id="parseInt(key)" :key="key" >
        <mt-cell v-for="(val,index) of item" :title="val"  :key="'item_'+index" @click.native="detail(val)"/>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import { MessageBox } from "mint-ui";
import RouterNames from "@/core/routerNames";

export default {
  data: function() {
    return {
      selected: 1,
      tabs: [
        { id: 1, name: "长裙" },
        { id: 2, name: "短裙" },
        { id: 3, name: "A字裙" },
        { id: 4, name: "鱼尾裙" },
        { id: 5, name: "雪纺裙" }
      ],
      lists: {
        1: ["长裙1", "长裙2", "长裙3", "长裙4", "长裙5", "长裙6"],
        2: ["短裙1", "短裙1", "短裙1", "短裙1", "短裙1", "短裙1"],
        3: ["短裙1", "短裙1", "短裙1", "短裙1", "短裙1", "短裙1"],
        4: ["短裙1", "短裙1", "短裙1", "短裙1", "短裙1", "短裙1"],
        5: ["短裙1", "短裙1", "短裙1", "短裙1", "短裙1", "短裙1"]
      }
    };
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
<style scoped>
.mint-navbar {
  margin-top: 40px;
}
.mint-tab-container {
  margin-top: 3px;
}
</style>
