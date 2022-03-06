<template>
    <div>
        <h1>Catalog</h1>
        <CatalogItems @select-item="selectItem" :items="items" />
        <DisplayedItem :items="items"/>
    </div>
</template>

<script>
import CatalogItems from '../components/catalog/CatalogItems.vue'
import DisplayedItem from '../components/catalog/DisplayedItem.vue'
export default {
    name: 'Catalog',
    components: {
        CatalogItems,
        DisplayedItem
    },
    data() {
    return {
        items: []
    }
    },
    created() {
        this.items = [
        {
            id: 1,
            product: 'Yoghurt A',
            price: 5.95,
            image: 'https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/13079298_LXL1_20210610.jpg?w=1200&q=70',
            selected: true,
            nutritionalInfo: [{
                energy: 50,
                protein: 20,
                fats: 10,
                cholestrol: 25,
                carbohydrate: 10,
                dietaryFibre: 5,
                sodium: 90,
                calcium: 100,
            }],

        }, 
        {
            id: 2,
            product: 'Yoghurt B',
            price: 3.23,
            image: 'https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/13195585_XL1_20210308.jpg?w=1200&q=70',
            selected: false,
            nutritionalInfo: [{
                energy: 310,
                protein: 202,
                fats: 144,
                cholestrol: 35,
                carbohydrate: 12,
                dietaryFibre: 52,
                sodium: 40,
                calcium: 50,
            }],
        },
        ]
    },
    methods: {
        selectItem(id) {
            this.items = this.items.map((item) => item.id === id ? {...item, selected: true} : {...item, selected:false})
        }
    }
}
</script>