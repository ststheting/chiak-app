<template>
    <div>
        <Nav />
        <div class="m-20 border-2 bg-lime-50">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
                <div class="flex flex-wrap ml-10 mt-10">
                    <img
                    src="./icons/Chiak 2.png"
                    width="125"
                    height="125"
                    class="d-inline-block align-top ml-3"
                />
                <h1 class="ml-5 mt-3 text-lime-600 text-2xl"> | &nbsp Shopping List</h1>
                </div>
                <button class="flex mr-20 mt-10 p-2 px-4 bg-lime-600 rounded-full text-white" @click="clearAll()">Clear All Items</button>
            </div>
            <Items @clear-product="deleteProduct" :items="items" />
        </div>
    </div>
</template> 

<script>
import Items from '../components/Items.vue'
import Button from '../components/Button.vue'
import Nav from '../components/Nav.vue'
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
        Button,
        Nav
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
