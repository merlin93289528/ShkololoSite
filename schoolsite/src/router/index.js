
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
        meta: {auth: true},
        component: () => import('@/pages/JournalPage')
    },
    {
        path : '/admin',
        component: () => import('@/pages/AdminPage')
    }
]
const router = createRouter({
    routes,
    history: createWebHashHistory()
})

router.beforeEach((to, from , next) => {
    const currentUser = JSON.parse(localStorage.getItem("isAuth"))
    const requireAuth = to.matched.some(record => record.meta.auth)

    if(requireAuth && !currentUser){
        next('/login')
        alert('Війдіть в систему для доступу до журналу')
    }
    else{
        next()
    }
})
export default router