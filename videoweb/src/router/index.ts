import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes:RouteConfig[] = [
  {
    path: '/',
    name: 'MainMenu',
    component: () => import(/* webpackChunkName: "mainmuen" */'../views/MainMenu.vue'),
    children:[
      {
        path:'/home',
        name:'首页',
        component:() => import(/* webpackChunkName: "Home" */'../views/page/Home.vue')
      },
      {
        path:'/vlogscrud/:urlpath',
        name:'vlog',
        component:() => import(/* webpackChunkName: "vlog" */'../views/page/video/VideoPage.vue'),
        props:true
      },
      {
        path:'/usercurd/:urlpath',
        name:'user',
        component:() => import(/* webpackChunkName: "User" */'../views/page/user/UserPage.vue'),
        props:true
      }
    ]
    
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
