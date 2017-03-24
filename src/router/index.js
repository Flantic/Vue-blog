import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import Article from '@/views/Article'
import Photo from '@/views/Photo'
import News from '@/views/News'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [
    {path: '/',component: Home},
    {path: '/Article',component: Article},
    {path: '/Photo',component: Photo},
    {path: '/News',component: News},
  ]
})
