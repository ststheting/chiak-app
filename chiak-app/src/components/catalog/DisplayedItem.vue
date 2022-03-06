<template>
   <div>
        <img :src=item.image width="300" height="300">
        <h1>{{item.product}} </h1>
        <h2>Price : ${{item.price}}</h2>
        <h3>Nutrional Facts: </h3>
        <div :key="item.id" v-for="nutrition in item.nutritionalInfo">
           Energy: {{ nutrition.energy }} kcal
        </div>
        <div :key="item.id" v-for="nutrition in item.nutritionalInfo">
           Protein: {{ nutrition.protein }} kcal
        </div>
        <div :key="item.id" v-for="nutrition in item.nutritionalInfo">
           Total fats: {{ nutrition.fats }} kcal
        </div>
        <div :key="item.id" v-for="nutrition in item.nutritionalInfo">
           Cholestrol: {{ nutrition.cholestrol }} kcal
        </div>
        <div :key="item.id" v-for="nutrition in item.nutritionalInfo">
           Carbohydrate: {{ nutrition.carbohydrate }} kcal
        </div>
        <div :key="item.id" v-for="nutrition in item.nutritionalInfo">
           Dietary Fibre: {{ nutrition.dietaryFibre }} kcal
        </div>
        <div :key="item.id" v-for="nutrition in item.nutritionalInfo">
           Sodium: {{ nutrition.sodium }} kcal
        </div>
        <div :key="item.id" v-for="nutrition in item.nutritionalInfo">
           Calcium: {{ nutrition.calcium }} kcal
        </div>
        <Button @click="addItem(item)" text="Add item to Cart"></Button>
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