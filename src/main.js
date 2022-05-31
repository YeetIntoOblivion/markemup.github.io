import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import * as VueCookies from 'vue-cookies'

export const BASE_URL = 'http://127.0.0.1:9000/';


const routes = [

    {
        path: '/',
        component: () => import('./views/Initializer.vue')
    },

    {
        path: '/login',
        component: () => import('./views/Login.vue')
    },

    {
        path: '/dashboard',
        component: () => import('./views/Dashboard.vue')
    },

    {
        path: '/account',
        component: () => import('./views/Account.vue')
    }
    ,

    {
        path: '/groups',
        component: () => import('./views/Groups.vue')
    }
    ,

    {
        path: '/marks',
        component: () => import('./views/Marks.vue')
    }
    ,

    {
        path: '/friends',
        component: () => import('./views/Friends.vue')
    }
    ,

    {
        path: '/settings',
        component: () => import('./views/Settings.vue')
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
})

createApp(App)
.use(router)
.use(VueCookies)
.mount('#app')
