<template>
<div>
    <div :key="item.id" v-for="item in items">
        <Item @clear-product="$emit('clear-product', item.id)" :item="item" />
    </div>
    </div>
</template>

<script>
import Item from './Item.vue'

export default {
    name: 'Items',
    props: {
        items: Array,
    },
    components: {
        Item
    },
    emits: ['clear-product'],
    
}
</script>