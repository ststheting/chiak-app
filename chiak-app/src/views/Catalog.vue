<template>
    <div>
        <Nav />
        <div v-if="this.display" class="grid grid-cols-3 justify-between mx-auto min-h-screen">
            <CatalogItems @select-item="selectItem" :items="items" />
            <DisplayedItem :item="selected" />
            
        </div>
        <div v-else class="text-center text-2xl mt-10">
                <h1>No items found, try a different search!</h1>
        </div>
    </div>
</template>

<script>
import CatalogItems from '../components/catalog/CatalogItems.vue'
import DisplayedItem from '../components/catalog/DisplayedItem.vue'
import Nav from '../components/Nav.vue'
import CatalogService from '../services/CatalogService'
import UserService from '../services/UserService'
export default {
    name: 'Catalog',
    components: {
        CatalogItems,
        DisplayedItem,
        Nav
    },
    data() {
        return {
            items: [],
            selected: Object,
            display: true
        }
    },
    mounted() {
        // this.items = CatalogService.getProducts()
        //     .then((res) => {
        //         if(res == "failed"){
        //             this.display = false;
        //         } else {
        //             this.items = JSON.parse(localStorage.getItem("catalog"));
        //             this.selected = this.items[0];
        //             if(this.items.length == 0) {
        //                 this.display = false;
        //             } else {
        //                 this.display = true;
        //             }
        //         }
        //     })
        this.items = JSON.parse(localStorage.getItem("catalog"));
        this.selected = this.items[0];
        if(this.items.length == 0) {
            this.display = false;
        } else {
            this.display = true;
        }
        if(!UserService.isLoggedIn()){
            this.$router.push('/login')
        }
    },
    methods: {
        selectItem(id) {
            this.selected = this.items.find(item => item.id === id)
            console.log(this.selected)
        },
        test(){
            console.log(this.items.length)
        }
    }
}
</script>