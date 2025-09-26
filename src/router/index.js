import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/start',
        redirect: '/'
    },
    {
        path: '/',
        name: 'start',
        meta: {
            layout: 'Application'
        },
        component: function () {
            return import('../views/StomatologyPage.vue')
        }
    },
    {
        path: '/disp',
        name: 'disp',
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
