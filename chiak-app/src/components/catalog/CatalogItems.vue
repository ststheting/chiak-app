<template>
    <div class="overflow-y-scroll max-h-screen pl-20 bg-lime-50 ">
        <div :key="item.id" v-for="(item, index) in items">
            <CatalogItem @select-item="$emit('select-item', item.id)" :item="item" :index="index"/>
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
    data() {
        return {
            isFirst: true
        }
    }
}
</script>

<style>
</style>