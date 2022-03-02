import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import './index.css'
import { createRouter, createWebHistory } from 'vue-router'
import Cart from './views/Cart.vue'
import Home from './views/Home.vue'
// import Nav from './views/Nav.vue'

const routes = [
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


createApp(App).use(router).mount('#app')
