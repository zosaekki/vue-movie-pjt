import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BoxOfficeByDay from '../views/BoxOfficeByDay.vue';

const routes = [
  {
    path: '/',
    name: 'hone',
    component: Home
  },
  {
    path: '/boxOfficeByDay',
    name: 'boxOfficeByday',
    component: BoxOfficeByDay
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
