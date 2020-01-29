import Vue from 'vue'
import Router from 'vue-router'
import index from "@/views/index"
import login from '@/views/login'
import search from '@/views/search'
import index_flower from "../views/similar_product/index_flower";
import index_matebook from "../views/similar_product/index_matebook";
import index_oat from "../views/similar_product/index_oat";
import index_tooth from "../views/similar_product/index_tooth";
import index_watch from "../views/similar_product/index_watch";
import index_window from "../views/similar_product/index_window";
import point_gift from "../views/point_gift";
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/index_flower',
      name: 'index_flower',
      component: index_flower
    },
    {
      path: '/index_matebook',
      name: 'index_matebook',
      component: index_matebook
    },
    {
      path: '/index_oat',
      name: 'index_oat',
      component: index_oat
    },
    {
      path: '/index_tooth',
      name: 'index_tooth',
      component: index_tooth
    },
    {
      path: '/index_watch',
      name: 'index_watch',
      component: index_watch
    },
    {
      path: '/index_window',
      name: 'index_window',
      component: index_window
    },
    {
      path: '/point_gift',
      name: 'point_gift',
      component: point_gift
    }
  ]
})
