import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import ChatDashboard from './views/ChatDashboard.vue';

Vue.useContext(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  Routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatDashboard,
    },
  ],
});
