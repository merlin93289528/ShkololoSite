
import {createRouter, createWebHashHistory} from 'vue-router';


const routes = [
    {
        path : '/',
        component: () => import('@/pages/HomePage')
    },
    {
        path : '/login',
        component: () => import('@/pages/LoginPage')
    },
    {
        path : '/registration',
        component: () => import('@/pages/RegistrationPage')
    },
    {
        path : '/journal',
        component: () => import('@/pages/JournalPage')
    }
]
const router = createRouter({
    routes,
    history: createWebHashHistory()
})
export default router