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
            redirect: "/home/tuijian",
            component: () =>
                import ("../views/home/index.vue"),
            children: [{
                    path: "tuijian",
                    name: "Tuijian",
                    component: () =>
                        import ("../views/home/tuijian")
                },

                {
                    path: "xiaomishouji",
                    name: "Xiaomishouji",
                    component: () =>
                        import ("../views/home/xiaomishouji"),
                },
                {
                    path: "dianshi",
                    name: "Dianshi",
                    component: () =>
                        import ("../views/home/dianshi"),
                },
                {
                    path: "diannao",
                    name: "Diannao",
                    component: () =>
                        import ("../views/home/diannao"),
                }
            ]

        },
        {
            path: '/kind',
            name: 'Kind',
            component: () => import('@/views/kind/index.vue')
        },
        {
            path: '/car',
            name: 'Car',
            component: () => import('@/views/car/index.vue'),
            meta:{
                showFooter:true
            }
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
        {
            path:'/search',
            name:'Search',
            component:()=>import('@/views/search/index.vue'),
            meta:{
                showFooter:true
            }
        },
        {
            path:'/dail/:id',
            name:'Dail',
            component:()=>import('@/views/dail/index.vue'),
            meta:{
                showFooter:true
            }
        }

    ],
    linkActiveClass: 'active'
})




export default router;