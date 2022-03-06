<template>
<div>
    <div :key="item.id" v-for="item in items">
        <CatalogItem @select-item="$emit('select-item', item.id)" :item="item" />
    </div>
    </div>
</template>

<script>
import CatalogItem from './CatalogItem.vue'

export default {
    name: 'CatalogItems',
    props: {
        items: Array,
    },
    components: {
        CatalogItem
    },
    emits: ['select-item'],
    
}
</script>