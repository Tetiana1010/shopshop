import { createRouter, createWebHistory } from 'vue-router';
import clientRouter from './../client/router.js';
import adminRouter from './../admin/router.js';
import commonRouter from './../common/router.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...clientRouter,
    ...adminRouter,
    ...commonRouter
  ]
});

export default router
