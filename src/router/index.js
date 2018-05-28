import Vue from 'vue'
import Router from 'vue-router'
import user from 'components/user/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user',
      component: user
    }
  ]
})
