<template>
  <div>
    <nav class="navbar bg-lime-50">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <button class="navbar-brand" @click='home()'>
          <img
            src="./icons/Chiak 2.png"
            width="200"
            height="200"
            class="d-inline-block align-top ml-3"
          />
        </button>
        <div class="flex">
            <input type="text" class="block p-2 pl-8 pr-20 w-full text-green-700 bg-gray-50 rounded-lg border border-green-700 sm:text-md focus:ring-green-700 focus:border-green-700" placeholder="Search for an item...">
            <button @click='search()'>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-search m-3 ml-4 text-green-700" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </button>
        </div>
        <div class="flex mr-7">
          <button class="text-green-700" @click='shoplist()'>Shopping List &nbsp&nbsp </button>
          <button @click='cart()'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag m-2 text-green-700" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
              </svg>
          </button>
        </div>
      </div>
    </nav>
    
  </div>
</template>
<script>
export default {
  name: "Nav",
  props: {

  },
  methods: {
    shoplist(){
        this.$router.push("/shopping");
    },
    home(){
      this.$router.push('/')
    },
    search(){
      this.$router.push('/catalog')
    }
  }
};
</script>
<style>

</style>