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
            return import('../views/StageStart.vue')
        }
    },
    {
        path: '/scanning',
        name: 'scanning',
        meta: {
            layout: 'Application'
        },
        component: function () {
            return import('../views/StageScanning.vue')
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
