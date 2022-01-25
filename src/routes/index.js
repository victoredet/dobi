import {createRouter, createWebHistory} from 'vue-router';
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Dashboard from '../pages/Dashboard.vue'
import Tracking from '../pages/Tracking.vue'
import Profile from '../pages/Profile.vue'
import Admin from '../pages/Admin.vue'


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
      },
      {
        path: '/',
        component: Tracking,
      },
      {
        path: '/profile',
        component: Profile,
      },
      {
        path: '/admin',
        component: Admin,
      }
  ]
});