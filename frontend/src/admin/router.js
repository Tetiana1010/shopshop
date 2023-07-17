// import { createRouter, createWebHistory } from 'vue-router';
import AdminView from './views/AdminView.vue';

const adminRoutes = [
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  }
];

// const adminRouter = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: adminRoutes
// });

export default adminRoutes;
