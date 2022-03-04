import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import './index.css'
import { createRouter, createWebHistory } from 'vue-router'
import Cart from './views/Cart.vue'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Preset from './views/Preset.vue'
import Register from './views/Register.vue'
import ForgotPassword from './views/ForgotPassword.vue'

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
