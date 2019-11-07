<template>
  <div class="tabsLayout">
    
    <router-view class="router-view"></router-view>
    <footer>
      <ul>
        <li><router-link :to="'/tab/top/one'" :class="active==1?'active':''">1</router-link></li>
        <li><router-link :to="'/tab/two'" :class="active==2?'active':''">2</router-link></li>
        <li><router-link :to="'/tab/three'" :class="active==3?'active':''">3</router-link></li>
      </ul>
    </footer>
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
      this.getRouter(to.name);
    },
  },
  created() {
    this.getRouter(this.$route.name);
  },
  methods: {
    getRouter(name) {
      switch (name) {
        case 'One':
          this.active = 1;
          break;
        case 'Two':
          this.active = 2;
          break;
        case 'Three':
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
  .tabsLayout{
    .router-view{
      height:100vh;
      padding-bottom:60px;
      box-sizing: border-box;
      overflow-y:auto;
    }
    footer{
      position:fixed;
      background:#fff;
      z-index:100;
      bottom:0px;
      width:100%;
      height:60px;
      line-height:60px;
      border-top:1px solid #c3c3c3;
      
      ul{
        margin:0px;
        padding:0px;
      }
    }
    li{
        list-style:none;
        display:inline-block;
        width:33.3%;
    }
    li>.active{
      color:red;
    }
  }
</style>