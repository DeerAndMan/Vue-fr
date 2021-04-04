import Vue from 'vue'
import VueRouter from 'vue-router'
import LayIndex from '../layout/LayIndex.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LayIndex',
    component: LayIndex,
    meta: { // 信息
      title: '首页'
    },
    redirect: '/home', // 重定向
    children: [{
      path: 'home',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },{
      path: 'index',
      name: 'Index',
      component: () => import('../components/page/Index.vue')
    },
    {
      path: 'about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }]
  },
  // {
  //   path: '/home',
  //   name: 'Home',
  //   redirect: '/', // 重定向
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
