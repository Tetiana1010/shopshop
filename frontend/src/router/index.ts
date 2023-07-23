import { createRouter, createWebHistory } from 'vue-router';
import clientRouter from '@/client/router';
import adminRouter from '@/admin/router';
import commonRouter from '@/common/router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...clientRouter,
    ...adminRouter,
    ...commonRouter
  ]
});

export default router
