import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BoxOfficeByDay from '../views/BoxOfficeByDay.vue';
import BoxOfficeByWeek from '../views/BoxOfficeByWeek.vue';

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
  },
  {
    path:'/boxOfficeByWeek',
    name: 'boxOfficeByWeek',
    component: BoxOfficeByWeek
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
