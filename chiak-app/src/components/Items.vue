<template>
    <div class="border-2 m-10 px-10 bg-white">
        <div class="text-center py-5" v-if="this.items.length === 0">You don't have any items in your list. Try searching for an item and adding it!</div>
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
    // data() {
    //     return {
    //         display: true
    //     }
    // },
    // created() {
    //     if(this.items.length == 0) {
    //         this.display = true;
    //     } else {
    //         this.display = false;
    //     }
    // }
}
</script>