<template>
  <div>
    <x-header :title="this.$route.name"  @click="back" :right-options="{showMore:true}"></x-header>
    <div class="name">商品名称:{{name}}</div>
  </div>
</template>
<script>
import { XHeader } from 'vux'
export default {
  components: {
    XHeader
  },
  data () {
    return {
      name: this.$route.params.name
    }
  },
  methods: {
    back () {
      this.$router.back(-1)
    }
  },
  beforeCreate () {
    document.title = this.$route.name
  },
  created () {}
}
</script>
<style scoped>
.name {
  margin-top: 40px;
}
</style>
