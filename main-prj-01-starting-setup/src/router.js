import { createRouter, createWebHistory } from 'vue-router';

import CoachesList from './pages/coaches/CoachesList.vue';
import CoachDetail from './pages/coaches/CoachDetail.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import CoachResistration from './pages/coaches/CoachResistration.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        { path: '/contact', component: ContactCoach }, // /coaches/c1/contact
      ],
    },
    { path: '/register', component: CoachResistration },
    { path: '/requests', component: RequestsReceived },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;