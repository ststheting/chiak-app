<template>
  <div>
    <nav class="navbar bg-gray-200">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a class="navbar-brand" href="">
        <img
          src="./icons/Chiak 2.png"
          width="200"
          height="200"
          class="d-inline-block align-top ml-3"
        />
      </a>
      <div class="flex">
      <input type="text" id="email-adress-icon" class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Search...">
      </div>
      </div>
    </nav>
    
  </div>
</template>
<script>
export default {
  name: "Nav",
  props: {},
};
</script>
<style>
</style>