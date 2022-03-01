
<template>
  <div>
    <Cart head="items" />
    <Items :items="items" />
  </div>


</template>

<script>
import Cart from './components/Cart.vue'
import Items from './components/Items.vue'

export default {
  name: 'App', 
  components: {
    Cart,
    Items,
  },
  
}
</script>



<style>
</style>
