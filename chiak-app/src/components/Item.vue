<template>
    <div>
        <h3> {{ item.product }} </h3>
        <img :src=item.image width="100" height="100">
        <Button @click="clear(item.id)" text="Clear"> </Button>
        <p>${{ item.price }} </p>
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