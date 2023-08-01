import AdminView from './views/AdminView.vue';
import ProductManagementView from './views/ProductManagementView.vue';
import MessagesManagementView from './views/MessagesManagementView.vue';


const adminRoutes = [
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
  {
    path: '/admin/product-management',
    name: 'product management',
    component: ProductManagementView
  },
  {
    path: '/admin/messages-management',
    name: 'messages-management',
    component: MessagesManagementView
  }
];

export default adminRoutes;
