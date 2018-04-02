<template>
  <div>
    <mt-header fixed :title="this.$route.name">
      <mt-button slot="left" icon="back" @click="back">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="name">商品名称:{{name}}</div>
  </div>
</template>
<script>
export default {
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
  created () {

  }
}
</script>
<style scoped>
  .name{
    margin-top:40px;
  }
</style>
