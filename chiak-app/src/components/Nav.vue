<template>
  <div>
    <nav class="navbar bg-green-700">
      <div class="container flex flex-wrap justify-between items-center mx-auto py-2">
        <div class="flex text-white ml-7 text-xs">Follow us on Instagram @chiak</div>
        <button @click='logout()' class="flex text-sm mr-7 text-white">Logout</button>
      </div>
    </nav>
    <nav class="navbar bg-green-600">
      <div class="container flex flex-wrap justify-between items-center mx-auto py-3">
        <button class="navbar-brand" @click='home()'>
          <img
            src="./icons/Chiak White.png"
            width="130"
            height="130"
            class="d-inline-block align-top ml-7"
          />
        </button>
        <div class="flex">
            <input v-model="searchinput" @keyup.enter='search()' type="text" class="placeholder:text-slate-400 block bg-white pl-4 pr-80 w-full bg-gray-50 rounded-sm border border-slate-300 sm:text-md focus:ring-green-700 focus:border-green-700" placeholder="Search for an item...">
            <button @click='search()'>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-search m-3 ml-4 text-white" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </button>
        </div>
        <div class="flex mr-7">
          <button class="text-white" @click='shoplist()'>Shopping List &nbsp&nbsp </button>
          <button @click='shoplist()'>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bag m-2 text-white" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
              </svg>
          </button>
        </div>
      </div>
    </nav>
    
  </div>
</template>
<script>
import CatalogService from '../services/CatalogService'
export default {
  name: "Nav",
  props: {

  },
  data() {
    return {
      searchinput: ''
    }
  },
  methods: {
    shoplist(){
        this.$router.push("/shopping");
    },
    home(){
      this.$router.push('/')
    },
    search(){
      // variable to store input
      // preset to be sent as well
      if(this.searchinput !== ""){
        if(localStorage.getItem("presettemp") != null){
          CatalogService.searchWithPreset(JSON.parse(localStorage.getItem("presettemp")), this.searchinput)
          .then((res) => {
            if(this.$route.path == '/catalog'){
              this.$router.go()
            } else {
              this.$router.push('/catalog')
            }
          })
        } else {
          CatalogService.searchWithNoPreset(this.searchinput)
          .then((res) => {
            if(this.$route.path == '/catalog'){
              this.$router.go()
            } else {
              this.$router.push('/catalog')
            }
          })
        }
      } else {
        CatalogService.getProducts() //can backend receive a preset with empty searchinput? what abt no preset?
        .then((res) => {
          if(this.$route.path == '/catalog'){
            this.$router.go()
          } else {
            this.$router.push('/catalog')
          }
        })
      }
    },
    logout(){
      localStorage.clear()
      this.$router.push('/login')
    }
  }
};
</script>
<style>

</style>