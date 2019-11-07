<template>
  <div class="top">
    <header>GOGO</header>
    <router-view class="top-routers-views"></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 1,
    };
  },
  watch: {
    $route(to, from) {
      this.getRouter(to.path);
    },
  },
  created() {
    this.getRouter(this.$route.path);
  },
  methods: {
    getRouter(path) {
      switch (path) {
        case '/tab/one':
          this.active = 1;
          break;
        case '/tab/two':
          this.active = 2;
          break;
        case '/tab/three':
          this.active = 3;
          break;
        default:
          break;
      }
    },
  },
};
</script>
<style lang="scss">
.top{
  header{
    width:100%;
    background: #fff;
    position:fixed;
    z-index:100;
    height:60px;
    line-height:60px;
    border-bottom:1px solid #c3c3c3;
  }
  width:100%;
  .top-routers-views{
    padding-top:60px;
  }
}
</style>