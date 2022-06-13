import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Goods from '@/views/Goods.vue'
import Account from '@/views/Account.vue'
import Market from '@/views/Market.vue'
import Notice from '@/views/Notice.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/account',
    component: Account,
  },
  {
    path: '/notice',
    component: Notice,
  },
  {
    path: '/goods',
    component: Goods,
  },
  {
    path: '/market',
    component: Market,
  },
]

const router = new VueRouter({
  routes,
})

export default router
