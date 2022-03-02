<template>
    <header>
        <h1>Cart 
            <Button @click="clearAll()" text="Clear all" /></h1>
        <Items @clear-product="deleteProduct" :items="items" />
    </header>
</template> 

<script>
import Items from '../components/Items.vue'
import Button from '../components/Button.vue'
export default {
    name: 'Cart',
    data() {
    return {
        items: []
    }
    },
    created() {
        this.items = [
        {
            id: 1,
            product: 'Yoghurt',
            price: 5.90,
            image: 'https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/13079298_LXL1_20210610.jpg?w=1200&q=70',
            clear: false,
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
            product: 'Peanut Butter',
            price: 3.20,
            image: 'https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/47440_XL1_20210827.jpg?w=1200&q=70',
            clear: false,
            nutritionalInfo: [{
                energy: 30,
                protein: 20,
                fats: 10,
                cholestrol: 25,
                carbohydrate: 10,
                dietaryFibre: 5,
                sodium: 90,
                calcium: 100,
            }],
        },
        ]
    },
    components: {
        Items,
        Button
    },
    methods: {
        clearAll() {
            this.items = []
        },
        deleteProduct(id) {
            // console.log('items', id);
            this.items = this.items.filter((item) => item.id !== id)
        }
    },

    
    // methods: {
    //     deleteItem(id) {
    //         if(confirm('Are you sure?')) {
    //             this.items = this.items.filter((item) => item.id !== id)
    //         }
    //     },
    // },
    
}
</script>
