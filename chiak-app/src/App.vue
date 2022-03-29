<script>
import Nav from './components/Nav.vue'
import Home from './views/Home.vue'
import ShopList from './views/ShopList.vue'
import Preset from './views/Preset.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import ForgotPassword from './views/ForgotPassword.vue'
import Catalog from './views/Catalog.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Home,
    ShopList,
    Preset,
    Register,
    Login,
    ForgotPassword,
    Catalog
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
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400&family=Roboto:wght@300;400&display=swap');
@import url("https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/hk-grotesk.min.css");
*  {
  /* font-family: 'HK Grotesk', sans-serif; */
  /* font-family: 'Open Sans', sans-serif */
  font-family: 'Roboto', sans-serif
}
</style>