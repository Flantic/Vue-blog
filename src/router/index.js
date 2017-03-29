import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import Article from '@/views/Article'
import Photo from '@/views/Photo'
import News from '@/views/News'
import About from '@/views/About'
import Sign from '@/views/Sign'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [
    {path: '/',component: Home},
    {path: '/Article',component: Article},
    {path: '/Photo',component: Photo},
    {path: '/News',component: News},
    {path: '/About',component: About},
    {path: '/Sign',component: Sign},
  ]
})
