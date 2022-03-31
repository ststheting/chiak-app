<template>
<div class="bg-lime-50 col-span-2 flex pl-20">
  <div class="p-10">
    <h1 class="text-3xl mt-2 mb-4">{{ item.name }}</h1>
    <h1 class="text-xl mb-12">{{ item.brand }}</h1>
    <img class="border-2 my-8" :src="item.imgUrl" width="300" height="300" />
    <div class="flex">
      <h2 class="mb-8 text-lg">Price: ${{ Number(item.price).toFixed(2) }}</h2>
      <h2 class="ml-20">Serving Size: {{ item.servingSize }}</h2>
    </div>
  </div>
  <div class="ml-48">
    <div class="mt-16 p-6 border-2 border-green-600 mb-10">
      <h3 class="text-xl mb-5"><b>Nutrional Facts: </b></h3>
      <div class="">
         <div>
        <b>Calories</b>: {{ item.calories }} kcal 
        </div>
        <div>
        <b>Sugar</b>: {{ item.sugar }} g
        </div>
         <div>
         <b>Total fats</b>: {{ item.fat }} g
         </div>
         <div>
        <b>Protein</b>: {{ item.protein }} mg 
         </div>
         <div>
        <b>Sodium</b>: {{ item.sodium }} g 
        </div>
         <div>
        <b>Fibre</b>: {{ item.fibre }} g
        </div>
      </div>
    </div>
    <button
      class="p-2 px-5 bg-lime-600 rounded-full text-white"
      @click="addItem(item)"
    >
      Add to Shopping List
    </button>
  </div>
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
      CatalogService.addProduct(item)
      .then((res) => {
        if(res == "failed"){
          alert("Item already added, please try again")
        } else {
          alert("Successfully added to your Shopping List")
        }
      })
    },
  },
};
</script>