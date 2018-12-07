<template>
  <div id="app">
    <product></product>
    <list></list>
    <goods-info></goods-info>
  <!-- <router-view/> -->
  </div>
</template>

<script>
import Product from './components/Product'
import List from './components/List'
import GoodsInfo from './components/GoodsInfo'
export default {
  name: 'App',
  components:{
    Product,
    List,
    GoodsInfo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height:100%;
}
</style>
