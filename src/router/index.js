import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Login from '../components/Login.vue'
import Create from '../components/CreateMeeting.vue'
const routes = [
    {path:'/signIn',component:Login},
    {path:'/create',component:Create}
]

export const router = new Router({
  routes,mode:'history'
})
