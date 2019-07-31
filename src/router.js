import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/journal',
      name: 'journal',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Journal.vue')
    },
    {
      path: '/journal/*',
      name: 'article',
      component: () => import('./views/Article.vue')
    },
    {
      path: '/*',
      name: 'default-not-found',
      component: () => import('./views/404.vue')
    },
    {
      path: '/not-found',
      name: 'navigate-not-found',
      component: () => import('./views/404.vue')
    }
  ]
})
