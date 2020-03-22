import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Auth from '../views/Auth.vue'
import HomeSignedIn from '../views/HomeSignedIn.vue'
import About from '../views/About.vue'
import Impressum from '../views/Impressum'
import Datenschutz from '../views/Datenschutz'
import Login from '../views/Login'
import Education from '../views/Education.vue'

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
    path: '/auth/:phone',
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
    path: '/education/:beitrag',
    name: 'Education',
    component: Education
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
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
});
router.beforeEach((to, from, next) => {
  if (to.name !== 'HomeSignedIn' && localStorage.getItem('token')) next({ name: 'HomeSignedIn' })
  if (to.name == 'HomeSignedIn' && !localStorage.getItem('token')) next({ name: 'Home' })
  // if the user is not authenticated, `next` is called twice
  next();
})

export default router
