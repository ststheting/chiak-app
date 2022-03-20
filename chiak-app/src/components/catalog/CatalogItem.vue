<template>
    <div class="border-2">
        <label>
            <div @click="select(item.id)" class="px-6 flex items-center justify-between mx-auto" text="Select Item">
                <div>
                    <h1 class="text-xl mb-3"> {{ item.name }} </h1>
                    <h1 class=""><b>${{ item.price }}</b></h1>
                </div>
                <img :src=item.imgUrl width="130" height="130">
            </div>
        </label>
    </div>
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