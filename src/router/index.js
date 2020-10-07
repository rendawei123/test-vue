// 配置路由相关信息
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/About'
import User from '@/components/User'
import HomeNews from '@/components/HomeNews'
import HomeMessage from '@/components/HomeMessage'
import Profile from '@/components/Profile'
import HomeData from '@/components/HomeData'
import HomeEchart from '@/components/HomeEchart'

//  通过Vue.use 安装插件
Vue.use(Router)

// 创建vue Router对象，并导出

export default new Router({
  // 配置路由和组件之间的映射关系
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '',
          redirect: 'news'
        },
        {
          path: 'news',
          component: HomeNews
        },
        {
          path: 'message',
          component: HomeMessage
        },
        {
          path: 'data',
          component: HomeData
        },
        {
          path: 'echart',
          component: HomeEchart
        }
      ]
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/user/:userId',
      component: User
    },
    {
      path: '/profile',
      component: Profile
    }
  ],
  mode: 'history'
})
