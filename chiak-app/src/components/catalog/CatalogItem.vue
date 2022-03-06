<template>
   <label>
    <div @click="select(item.id)" text="Select Item">
        <h2> {{ item.product }} </h2>
        <img :src=item.image width="100" height="100">
        <h3>${{ item.price }} </h3>
        Click to view more details..
    </div>
    </label>
    <!-- <h3 v-if="item.selected"> {{item.product}} is selected </h3> -->
</template>

<script>
export default {
    name: 'CatalogItem',
    props: {
        item: Object
    },
    methods: {
        select(id) {
           this.$emit('select-item', id)
        }
    }
}
</script>