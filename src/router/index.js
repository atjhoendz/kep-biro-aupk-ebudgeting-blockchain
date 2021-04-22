import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routes'
import { checkAccessMiddleware } from './middleware'

Vue.use(Router)

const router = new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes,
})

router.beforeEach(checkAccessMiddleware)

export default router
