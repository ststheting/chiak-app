<template>
  <div class="p-10">
    <h1 class="text-4xl mt-2 mb-12">{{ item.name }}</h1>
    <h1 class="text-4xl mt-2 mb-12">{{ item.brand }}</h1>
    <img class="border-2 my-8" :src="item.imgUrl" width="300" height="300" />
    <div class="flex">
      <h2 class="mb-8 text-lg">Price: ${{ item.price }}</h2>
      <h2 class="ml-20">Serving Size: 100g</h2>
    </div>
  </div>
  <div class="ml-10">
    <div class="mt-16">
      <h3 class="text-xl mb-5"><b>Nutrional Facts: </b></h3>
      <div class="mb-16">
        <b>Calories</b>: {{ item.calories }} kcal <b>Protein</b>:
        {{ item.sugar }} g <b>Total fats</b>: {{ item.fat }} g
        <b>Cholestrol</b>: {{ item.protein }} mg <b>Carbohydrate</b>:
        {{ item.sodium }} g <b>Dietary Fibre</b>: {{ item.fibre }} g
      </div>
    </div>
    <button
      class="p-2 px-5 bg-lime-600 rounded-full text-white"
      @click="addItem(item)"
    >
      Add to Shopping List
    </button>
  </div>
</template>

<script>
import Button from "../Button.vue";
import CatalogService from "../../services/CatalogService";
export default {
  name: "DisplayedItem",
  props: {
    item: Object,
  },
  components: {
    Button,
  },
  methods: {
    addItem(item) {
      //POST req to backend
      CatalogService.addProduct(item);
    },
  },
};
</script>