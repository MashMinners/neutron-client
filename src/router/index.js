import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/app/registry/stom'
    },
    {
        path: '/app/registry/stom',
        name: 'stom',
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
            return import('../views/DispPageView.vue')
        }
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
