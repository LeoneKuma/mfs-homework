import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ArticleOutline from '../components/ArticleOutline.vue'
import ArticleDetail from '../components/ArticleDetail'
import NotFound from '../components/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children:[
      {
        path:"/",
        component:ArticleOutline
      },
      { 
        path:"time/:time",
        component:ArticleOutline
      },
      {
        path:"tag/:tag",
        component:ArticleOutline
      },
      {
        path:"article/:id",
        component:ArticleDetail

      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/*',
    component:NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
