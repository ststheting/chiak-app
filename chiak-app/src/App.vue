<script>
import Nav from './components/Nav.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Home
  }
  //add all components here but only Home should be displayed?
}
</script>

<template>
  <div>
    <Home />
  </div>
</template>

<style>
  
</style>