import PrivacyPolicyView from './views/PrivacyPolicyView.vue';
import ContactView from '@/common/views/ContactView.vue';
const commonRoutes = [
    {
        path: '/contact',
        name: 'contact',
        component: ContactView
    },
    {
        path: '/privacy-policy',
        name: 'privacy policy',
        component: PrivacyPolicyView
    },
];
export default commonRoutes;
