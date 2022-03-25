<template>
    <div>
        <Nav />
        <div class="m-20 bg-lime-50 mx-36 pb-3 px-2">
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
            <!-- <div>
                <button class="flex mr-20 mt-10 p-2 px-4 bg-lime-600 rounded-full text-white" @click="test()">Test</button>
            </div> -->
            <Items @clear-product="deleteProduct" :items="items" />
        </div>
    </div>
</template> 

<script>
import Items from '../components/Items.vue'
import Button from '../components/Button.vue'
import Nav from '../components/Nav.vue'
import ShoppingListService from '../services/ShoppingListService'
import UserService from '../services/UserService'
export default {
    name: 'ShopList',
    data() {
        return {
            items: []
        }
    },
    created() {
        ShoppingListService.getProducts()
        .then((res) => {
            if(res == "failed"){

            } else {
                this.items = JSON.parse(localStorage.getItem("list"));
            }
        })
    },
    mounted() {
        if(!UserService.isLoggedIn()){
            this.$router.push('/login')
        }
    },
    components: {
        Items,
        Button,
        Nav
    },
    methods: {
        test() {
            console.log(this.items.length)
        },
        clearAll() {
            this.items = []
            ShoppingListService.deleteAllProducts();
        },
        deleteProduct(id) {
            // console.log('items', id);
            this.items = this.items.filter((item) => item.id !== id)
            ShoppingListService.deleteProduct(id);
            // .then((res) => {
            //     if(res == "failed") {

            //     } else {
            //         this.$router.push('/')
            //     }
            // });
        },
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
