<template>
   <div class="p-10">
      <h1 class="text-4xl mt-2 mb-12">{{item.product}} </h1>
      <img class="border-2 my-8" :src=item.image width="300" height="300">
      <div class="flex">
         <h2 class="mb-8 text-lg">Price: ${{item.price}}</h2>
         <h2 class="ml-20">Serving Size: 100g</h2>
      </div>
   </div>
   <div class="ml-10">
      <div class="mt-16">
         <h3 class="text-xl mb-5"><b>Nutrional Facts: </b></h3>
         <div class="mb-16">
            <div :key="item.id" v-for="nutrition in item.nutritionalInfo">
               <b>Energy</b>: {{ nutrition.energy }} kcal
            </div>
            <div :key="item.id" v-for="nutrition in item.nutritionalInfo">
               <b>Protein</b>: {{ nutrition.protein }} g
            </div>
            <div :key="item.id" v-for="nutrition in item.nutritionalInfo">
               <b>Total fats</b>: {{ nutrition.fats }} g
            </div>
            <div :key="item.id" v-for="nutrition in item.nutritionalInfo">
               <b>Cholestrol</b>: {{ nutrition.cholestrol }} mg
            </div>
            <div :key="item.id" v-for="nutrition in item.nutritionalInfo">
               <b>Carbohydrate</b>: {{ nutrition.carbohydrate }} g
            </div>
            <div :key="item.id" v-for="nutrition in item.nutritionalInfo">
               <b>Dietary Fibre</b>: {{ nutrition.dietaryFibre }} g
            </div>
            <div :key="item.id" v-for="nutrition in item.nutritionalInfo">
               <b>Sodium</b>: {{ nutrition.sodium }} mg
            </div>
         </div>
      </div>
      <button class="p-2 px-5 bg-lime-600 rounded-full text-white" @click="addItem(item)">Add to Shopping List</button>
   </div>
</template>

<script>
import Button from '../Button.vue'
export default {
    name: 'DisplayedItem',
    props: {
        item: Object
    },
    components: {
        Button
    },
    methods: {
        addItem(item) {
            //POST req to backend
        }
    }
}
</script>