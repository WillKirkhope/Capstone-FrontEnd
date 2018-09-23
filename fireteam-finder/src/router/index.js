import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Profile from '@/components/Profile'
import NewPostForm from '@/components/NewPostForm'
import HomePagePosts from '@/components/HomePagePosts'
import Login from '@/components/Login'
import NewUser from '@/components/NewUser'
import Profiles from '@/components/Profiles'
import UserById from '@/components/UserById'
// import SingleProfile from '@/components/SingleProfile'

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
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/NewUser',
      name: 'NewUser',
      component: NewUser
    },
    {
      path: '/Profiles',
      name: 'Profiles',
      component: Profiles
    },
    {
      path: '/user/:id',
      name: 'UserById',
      component: UserById
    }
  ]
})
