import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import InfoManage from '../views/InfoManage.vue'
import PasswordChange from '../views/PasswordChange.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup
  }, {
    path: "/infomanage",
    name: "infomanage",
    component: InfoManage
  },
  {
    path:"/password-change",
    name:"password-change",
    component:PasswordChange
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
