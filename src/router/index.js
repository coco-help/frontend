import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Auth from '../views/Auth.vue'
import HomeSignedIn from '../views/HomeSignedIn.vue'
import About from '../views/About.vue'
import Impressum from '../views/Impressum'
import Datenschutz from '../views/Datenschutz'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/h',
    name: 'HomeSignedIn',
    component: HomeSignedIn
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: Impressum
  },
  {
    path: '/datenschutz',
    name: 'Datenschutz',
    component: Datenschutz
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
