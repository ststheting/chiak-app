<script>
import Nav from './components/Nav.vue'
import Home from './views/Home.vue'
import ShopList from './views/ShopList.vue'
import Preset from './views/Preset.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import ForgotPassword from './views/ForgotPassword.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Home,
    ShopList,
    Preset,
    Register,
    Login,
    ForgotPassword
  },
  // make it a habit to have all views here
}
</script>

<template>
  <div id="app">
    
    <router-view></router-view>
  </div>
</template>

<style>

</style>