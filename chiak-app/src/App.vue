<script>
import Nav from './components/Nav.vue'
import Home from './views/Home.vue'
import Cart from './views/Cart.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Home,
    Cart
  },

  //add all components here but only Home should be displayed?
}
</script>

<template>
  <div id="app">
    
    <router-view></router-view>
  </div>
</template>

<style>
  
</style>