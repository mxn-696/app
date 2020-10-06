import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'Home',
            component: () => import('@/views/home/index.vue')
        },
        {
            path: '/kind',
            name: 'Kind',
            component: () => import('@/views/kind/index.vue')
        },
        {
            path: '/car',
            name: 'Car',
            component: () => import('@/views/car/index.vue')
        },
        {
            path: '/mine',
            name: 'Mine',
            component: () => import('@/views/mine/index.vue'),
            redirect: '/mine/moren',
            children: [{
                    path: 'moren',
                    name: 'Moren',
                    component: () => import('@/views/mine/moren/index.vue')

                },
                {
                    path: 'login',
                    name: 'Login',
                    component: () => import('@/views/mine/login/index.vue')
                },
                {
                    path: 'res',
                    name: 'Res',
                    component: () => import('@/views/mine/res/index.vue')

                },
                {
                    path:'shezhi',
                    name:'Shezhi',
                    component: () => import('@/views/mine/shezhi/index.vue')

                },
                {
                    path:'address',
                    name:'Address',
                    component:()=>import('@/views/mine/address/index.vue'),
                    redirect:'address/list',
                    children:[
                        {
                            path:'list',
                            name:'Adslist',
                        component:()=>import('@/views/mine/address/list/index.vue'),
                        },
                        {
                            path:'add',
                            name:'Adslist',
                        component:()=>import('@/views/mine/address/add/index.vue')
                        },
                        {
                            path:'edit/:id',
                            name:'Adslist',
                        component:()=>import('@/views/mine/address/edit/index.vue')
                        },
                    ]
                }
            ]
        },

    ],
    linkActiveClass: 'active'
})




export default router;