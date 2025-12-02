import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/app/main'
    },
    {
        path: '/app/registry/stom',
        name: 'start',
        meta: {
            layout: 'Application'
        },
        component: function () {
            return import('../views/StomatologyPageView.vue')
        }
    },
    {
        path: '/app/registry/disp',
        name: 'disp',
        meta: {
            layout: 'Application'
        },
        component: function () {
            return import('../views/DispPage.vue')
        }
    },


    {
        path: '/products',
        name: 'products',
        meta: {
            layout: 'Application'
        },
        component: function () {
            return import('../views/DispPage.vue')
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
