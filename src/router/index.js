import Vue from 'vue'
import Router from 'vue-router'
import RouterNames from '@/core/routerNames'
import Home from '@/pages/home'
import Login from '@/pages/login'
import List from '@/pages/list'
import Detail from '@/pages/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: RouterNames.ROUTE_HOME,
      component: Home
    },
    {
      path: '/home',
      name: RouterNames.ROUTE_HOME,
      component: Home
    },
    {
      path: '/login',
      name: RouterNames.ROUTE_LOGIN,
      component: Login
    },
    {
      path: '/list',
      name: RouterNames.ROUTE_LIST,
      component: List
    },
    {
      path: '/detail/:name',
      name: RouterNames.ROUTE_DETAIL,
      component: Detail
    }
  ]
})
