<script>
import Nav from './components/Nav.vue'
import Home from './views/Home.vue'
import Cart from './views/Cart.vue'
import Preset from './views/Preset.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Home,
    Cart,
    Preset
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