import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '../pages/index'
import DetailPage from '../pages/detail'
import DetailAna from '../pages/detail/analysis'
import DetailAd from '../pages/detail/ad'
import DetailCou from '../pages/detail/count'
import DetailFor from '../pages/detail/forecast'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      
      component: IndexPage
    },
    {
    	path:'/detail',
    	component: DetailPage,
    	redirect:'/detail/analysis',
    	children:[
         {
         	path:'forecast',
         	component:DetailFor
         },
         {
         	path:'ad',
         	component:DetailAd
         },
         {
         	path:'count',
         	component:DetailCou
         },
         {
         	path:'analysis',
         	component:DetailAna
         },
    	]
    }
  ],
})
