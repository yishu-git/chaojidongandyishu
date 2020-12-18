import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
//解决重复重定向
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/gg',
    name: 'home',
    component: () => import('@/views/home')
  },
  {
    path: '/tupianlazy',
    name: 'tupianlazy',
    component: () => import('@/views/图片懒加载')
  },
  {
    path: '/',
    name: 'bsscroll',
    component: () => import('@/views/bsscroll')
  }


]

const router = new VueRouter({
  routes
})


export default router
