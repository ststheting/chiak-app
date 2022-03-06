<template>
    <div class="border-4 my-10 p-6 container flex flex-wrap justify-between items-center mx-auto">
      <div class="flex flex-wrap justify-between">
        <div class="mx-6">
         <img :src=item.image width="200" height="200">
        </div>
        <div class="ml-4">
           <h1 class="text-2xl mb-4"> {{ item.product }} </h1>
           <p class="text-md"><b>Price</b>: S${{ item.price }} </p>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <div class="border-2 p-5 mr-20">
         <span class="text-lg"><b>Nutrition Facts</b></span>
           <div class="mt-3 text-sm">
               <div :key="item.id" v-for="nutrition in item.nutritionalInfo">
                  <b>Energy</b>: {{ nutrition.energy }} kcal
               </div>
               <div :key="item.id" v-for="nutrition in item.nutritionalInfo">
                  <b>Protein</b>: {{ nutrition.protein }} g
               </div>
               <div :key="item.id" v-for="nutrition in item.nutritionalInfo">
                  <b>Total Fat</b>: {{ nutrition.fats }} g
               </div>
               <div :key="item.id" v-for="nutrition in item.nutritionalInfo">
                  <b>Cholestrol</b>: {{ nutrition.cholestrol }} mg
               </div>
               <div :key="item.id" v-for="nutrition in item.nutritionalInfo">
                  <b>Total Carb</b>: {{ nutrition.carbohydrate }} g
               </div>
               <div :key="item.id" v-for="nutrition in item.nutritionalInfo">
                  <b>Dietary Fibre</b>: {{ nutrition.dietaryFibre }} g
               </div>
               <div :key="item.id" v-for="nutrition in item.nutritionalInfo">
                  <b>Sodium</b>: {{ nutrition.sodium }} mg
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
import Button from './Button.vue'
export default {
    name: 'Item',
    props: {
        item: Object
    },
    components: {
        Button
    },
    methods: {
        clear(id) {
            this.$emit('clear-product', id)
        }
    }
}
</script>