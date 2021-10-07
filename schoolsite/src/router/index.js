import HomePage from '@/pages/HomePage.vue';
import LoginPage from '@/pages/LoginPage.vue';
import RegistrationPage from '@/pages/RegistrationPage.vue';
import JournalPage from '@/pages/JournalPage.vue';
import {createRouter, createWebHashHistory} from 'vue-router';


const routes = [
    {
        path : '/',
        component: HomePage
    },
    {
        path : '/login',
        component: LoginPage
    },
    {
        path : '/registration',
        component: RegistrationPage
    },
    {
        path : '/journal',
        component:JournalPage
    }
]
const router = createRouter({
    routes,
    history: createWebHashHistory()
})
export default router