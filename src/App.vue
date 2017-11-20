<template>
  <div>
    <v-header></v-header>
    <v-feader></v-feader>
    <!-- <v-trans></v-trans> -->
    <router-view></router-view>
  </div>
</template>

<script>
  import vHeader from './components/header.vue'
  import vFeader from './components/header1.vue'
  import vTrans from './components/transtest.vue'
  import Hello from './components/Hello';

  export default {
    name: 'app',
    components: {
      vHeader,
      vFeader,
      vTrans,
      Hello
    },
    data(){
      return{
    }
  }
  };
</script>

<style lang="scss">
  @import "assets/style";
  @import "assets/list";

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
