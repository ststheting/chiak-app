import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import './index.css'
import { createRouter, createWebHistory } from 'vue-router'
import Cart from './views/Cart.vue'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Preset from './views/Preset.vue'

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
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Preset
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


createApp(App).use(router).mount('#app')
