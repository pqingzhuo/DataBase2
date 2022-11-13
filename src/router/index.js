import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Banner',
    component: () => import('../views/Banner.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home'),
    children:[
      {path:'seatHome', component: () => import('../views/seat/seatHome.vue')},
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/LoginView.vue'),
  },
  {
    path: '/forget',
    name: 'forget',
    component: () => import('../views/login/ForgetView.vue'),
  },
  {
    path: '/confirm',
    name: 'confirm',
    component: () => import('../views/login/ConfirmView.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/login/RegisterView.vue'),
    meta:{
      unShowNav:true
    }
  },
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router

