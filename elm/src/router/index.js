import Vue from 'vue'
import Router from 'vue-router'

import Home from "@/pages/Home"
import Order from "@/pages/Order"
import Seach from "@/pages/Seach"
import Profile from "@/pages/Profile"
import Login from "@/pages/Login"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/home",
      //路由懒加载
      component: (resolve) => require(['@/pages/Home.vue'],resolve)
    },
    {
      path:"/order",
      component: (resolve) => require(['@/pages/Order.vue'],resolve)
    },
    {
      path:"/seach",
      component: (resolve) => require(['@/pages/Seach.vue'],resolve)
    },
    {
      path:"/profile",
      component: (resolve) => require(['@/pages/Profile.vue'],resolve)
    },
    {
      path:"/login",
      component: (resolve) => require(['@/pages/Login.vue'],resolve)
    },
    {
      path:"",
      redirect:"/home"
    }
  ]
})
