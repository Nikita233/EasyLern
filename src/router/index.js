import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import Cabinet from '../views/Cabinet.vue'
import Quebase from '../views/Quebase.vue'
import Testbaze from '../views/Testbaze.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Register',
        name: 'Reg',
        component: Register
    },
    {
        path: '/Cabinet',
        name: 'Cabinet',
        component: Cabinet
    },
    {
        path: '/Quebase',
        name: 'Quebase',
        component:Quebase
    },
    {
        path: '/Testbaze',
        name: 'Testbaze',
        component:Testbaze
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router