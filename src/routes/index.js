import {createRouter, createWebHistory} from 'vue-router';
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Dashboard from '../pages/Dashboard.vue'


export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/login',
        component: Login,
      },
      {
        path: '/register',
        component: Register,
      },
      {
        path: '/dashboard',
        component: Dashboard,
      }
  ]
});