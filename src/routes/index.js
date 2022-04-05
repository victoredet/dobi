import {createRouter, createWebHistory} from 'vue-router';
import Login from '../pages/Login.vue'
import Forgot from '../pages/Forgot.vue'
import Reset from '../pages/Reset.vue'
import Register from '../pages/Register.vue'
import Dashboard from '../pages/Dashboard.vue'
import Contract from '../pages/Contract.vue'
import Deposit from '../pages/Deposit.vue'
import Withdraw from '../pages/Withdraw.vue'
import Profile from '../pages/Profile.vue'
import History from '../pages/History.vue'
import Admin from '../pages/admin/Admin.vue'
import Users from '../pages/admin/Users.vue'
import AdminDeposits from '../pages/admin/AdminDeposits.vue'
import AdminWithdrawal from '../pages/admin/AdminWithdrawal.vue'
import AdminContracts from '../pages/admin/AdminContracts.vue'


export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/login',
        component: Login,
      },
      {
        path: '/',
        component: Login,
      },
      {
        path: '/forgot_password',
        component: Forgot,
      },
      {
        path: '/reset_password',
        component: Reset,
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
        path: '/contracts',
        component: Contract,
      },
      {
        path: '/deposit',
        component: Deposit,
      },
      {
        path: '/withdraw',
        component: Withdraw,
      },
      {
        path: '/profile',
        component: Profile,
      },
      {
        path: '/history',
        component: History,
      },
      {
        path: '/admin',
        component: Admin,
      },
      {
        path: '/users',
        component: Users,
      },
      {
        path: '/admin_withdraw',
        component: AdminWithdrawal,
      },
      {
        path: '/admin_contracts',
        component: AdminContracts,
      },
      {
        path: '/admin_deposit',
        component: AdminDeposits,
      }
  ]
});