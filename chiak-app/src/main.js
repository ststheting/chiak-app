import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import './index.css'
import { createRouter, createWebHistory } from 'vue-router'
import ShopList from './views/ShopList.vue'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Preset from './views/Preset.vue'
import Register from './views/Register.vue'
import ForgotPassword from './views/ForgotPassword.vue'
import Catalog from './views/Catalog.vue'

const routes = [
    {
        path: '/shopping',
        name: 'ShopList',
        component: ShopList
    },
    {
        path: '/catalog',
        name: 'Catalog',
        component: Catalog
    },
    {
        path: '/',
        name: 'Preset',
        component: Preset
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path:  '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/forgotpassword',
        name: 'ForgotPassword',
        component: ForgotPassword
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


createApp(App).use(router).mount('#app')
