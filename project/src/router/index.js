import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path:'/',
            redirect:'/main'
        },
        {
            path:'/home',
            name:'Home',
            component:()=>import('@/views/home/index.vue')
        },
        {
            path:'/kind',
            name:'Kind',
            component:()=>import('@/views/kind/index.vue')
        },
        {
            path:'/car',
            name:'Car',
            component:()=>import('@/views/car/index.vue')
        },
        {
            path:'/mine',
            name:'Mine',
            component:()=>import('@/views/mine/index.vue')
        }
    ],
    linkActiveClass: 'active'
})




export default router;