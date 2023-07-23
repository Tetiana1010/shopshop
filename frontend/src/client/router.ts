import HomeView from './views/HomeView.vue';
import ShopView from './views/ShopView.vue';
import ProductView from './views/ProductView.vue';
import BlogView from './views/BlogView.vue';
import OurStoryView from './views/OurStoryView.vue';

export const clientRoutes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopView
  },
  {
    path: '/shop/:id',
    name: 'product',
    component: ProductView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/our-story',
    name: 'our story',
    component: OurStoryView
  }
];

export default clientRoutes;
