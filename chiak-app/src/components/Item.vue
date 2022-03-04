<template>
    <div class="border-2 my-10 p-10 container flex flex-wrap justify-between items-center mx-auto">
       <div class="flex flex-wrap justify-between items-center">
        <div class="ml-10 mr-20">
         <h1 class="text-3xl mb-8"> {{ item.product }} </h1>
         <img class="border-2 mb-5" :src=item.image width="150" height="150">
         <p class="text-lg"><b>Price</b>: S${{ item.price }} </p>
        </div>
        <div class="border-2 p-5 ml-14">
         <span class="text-xl"><b>Nutrition Facts</b></span>
         <div class="mt-3">
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
            <div :key="item.id" v-for="nutrition in item.nutritionalInfo">
               <b>Calcium</b>: {{ nutrition.calcium }} mg
            </div>
         </div>
         </div>
        </div>
        <div>
        <Button @click="clear(item.id)" class="mr-10" text="Clear"> </Button>
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