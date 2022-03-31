<template>
  <div
    class="
      border-4
      my-10
      p-6
      container
      flex flex-wrap
      justify-between
      items-center
      mx-auto
    "
  >
    <div class="flex flex-wrap justify-between">
      <div class="mx-6">
        <img :src="item.imgUrl" width="200" height="200" />
      </div>
      <div class="ml-4">
        <h1 class="text-2xl mb-4">{{ item.name }}</h1>
        <p class="text-md"><b>Brand</b>: {{ item.brand }}</p>
        <p class="text-md"><b>Price</b>: S${{ item.price }}</p>
      </div>
    </div>
    <div class="flex justify-between items-center">
      <div class="border-2 p-5 mr-12">
        <span class="text-lg"><b>Nutrition Facts</b></span>
        <div class="mt-3 text-sm">
           <div>
               <b>Calories</b>: {{ item.calories }} kcal 
           </div>
           <div>
          <b>Sugar</b>: {{ item.sugar }} g 
           </div>
           <div>
          <b>Total Fat</b>: {{ item.fat }} g 
           </div>
           <div>
          <b>Protein</b>: {{ item.protein }} mg 
           </div>
           <div>
          <b>Total Sodium</b>: {{ item.sodium }} g
           </div>
           <div>
          <b>Fibre</b>: {{ item.fibre }} g
           </div>
        </div>
      </div>
      <div>
        <Button @click="clear(item.id)" class="mr-10" text="Clear"> </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "Item",
  props: {
    item: Object,
  },
  components: {
    Button,
  },
  methods: {
    clear(id) {
      this.$emit("clear-product", id);
    },
  },
};
</script>