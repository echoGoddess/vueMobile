import Vue from 'vue'
import Router from 'vue-router'
import RouterNames from '@/core/routerNames'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: RouterNames.ROUTE_HOME,
      component: () => import('@/pages/home')
    },
    {
      path: '/home',
      name: RouterNames.ROUTE_HOME,
      component: () => import('@/pages/home')
    },
    {
      path: '/login',
      name: RouterNames.ROUTE_LOGIN,
      component: () => import('@/pages/login')
    },
    {
      path: '/list',
      name: RouterNames.ROUTE_LIST,
      component: () => import('@/pages/list')
    },
    {
      path: '/detail/:name',
      name: RouterNames.ROUTE_DETAIL,
      component: () => import('@/pages/detail')
    }
  ]
})
