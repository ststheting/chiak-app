<template>
    <div>
        <Nav />
        <div v-if="this.display" class="grid grid-cols-3 justify-between mx-auto">
            <CatalogItems @select-item="selectItem" :items="items" />
            <DisplayedItem :item="selected" />
            
        </div>
        <div v-else class="text-center text-2xl mt-10">
                <h1>No Items To Display :-( </h1>
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
    created() {
        this.items = CatalogService.getProducts()
            .then((res) => {
                if(res == "failed"){
                    this.display = false;
                } else {
                    this.items = JSON.parse(localStorage.getItem("catalog"));
                    this.selected = this.items[0];
                    if(this.items.length == 0) {
                        this.display = false;
                    } else {
                        this.display = true;
                    }
                }
            })
        if(!UserService.isLoggedIn()){
            this.$router.push('/login')
        }
    },

        // [
        // {
        //     id: 1,
        //     product: 'Yoghurt A',
        //     price: 5.95,
        //     image: 'https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/13079298_LXL1_20210610.jpg?w=1200&q=70',
        //     nutritionalInfo: [{
        //         energy: 50,
        //         protein: 20,
        //         fats: 10,
        //         cholestrol: 25,
        //         carbohydrate: 10,
        //         dietaryFibre: 5,
        //         sodium: 90,
        //         calcium: 100,
        //     }],

        // }, 
        // {
        //     id: 2,
        //     product: 'Yoghurt B',
        //     price: 3.23,
        //     image: 'https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/13195585_XL1_20210308.jpg?w=1200&q=70',
        //     nutritionalInfo: [{
        //         energy: 310,
        //         protein: 202,
        //         fats: 144,
        //         cholestrol: 35,
        //         carbohydrate: 12,
        //         dietaryFibre: 52,
        //         sodium: 40,
        //         calcium: 50,
        //     }],
        // },
        // ],
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