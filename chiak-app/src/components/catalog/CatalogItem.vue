<template>
    <div class="border-2">
            <div @click="select(item.id)" class="px-6 flex items-center justify-between mx-auto itemlist" text="Select Item">
                <div>
                    <h1 class="text-lg mb-3"> {{ item.name }} </h1>
                    <div class="flex justify-between items-center">
                        <h1 class="text-md"><b>${{ item.price }}</b></h1>
                        <h1 v-if="this.index == 0" class="text-green-600 text-sm">Best Match!</h1>
                    </div>
                </div>
                <img class="ml-2 py-2" :src=item.imgUrl width="120" height="120">
            </div>
    </div>
</template>

<script>
export default {
    name: 'CatalogItem',
    props: {
        item: Object,
        index: Number
    },
    methods: {
        select(id) {
           this.$emit('select-item', id)
        }
    },
}
</script>

<style>
.itemlist{
    cursor: pointer;
}
</style>