import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Profile from '@/components/Profile'
import NewPostForm from '@/components/NewPostForm'
import HomePagePosts from '@/components/HomePagePosts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/Destiny2',
      name: 'HomePagePosts',
      component: HomePagePosts
    },
    {
      path: '/WillKirkhope',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/CreatePost',
      name: 'NewPostForm',
      component: NewPostForm
    }
  ]
})
