<template>
  <div class="container mx-auto mt-20 border-2 border-lime-600 bg-lime-50">
    <div class="container p-5">
      <img
        src="./icons/Chiak.png"
        width="200"
        height="200"
        class="mx-auto mt-5"
      />
    </div>
    <div class="container text-center mt-3">
      <h3 class="text-lime-600 text-2xl mb-3">
        Welcome to <strong>CHIAK!</strong>
      </h3>
      Let's start by searching for your product.
      <div class="pt-2 relative mx-auto mt-4 text-gray-600 mb-8">
        <input
          class="
            border-2 border-gray-300
            bg-white
            h-12
            px-4
            pr-16
            rounded-lg
            text-md
            focus:outline-none
          "
          type="search"
          name="search"
          placeholder="Search"
        />
        <button type="submit" class="mt-5 mb-5 p-3 text-lime-600 bg-lime-100 rounded-r-lg">Go!</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  props: {},
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
p {

}
body {
  font-family: "Poppins", sans-serif;
}
</style>