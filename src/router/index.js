import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import ContactIndex from "../cmps/contact-index.vue";
import Stats from "../cmps/stats.vue";
import ContactDetails from "../cmps/contact-details.vue"
import ContactEdit from "../views/contact-edit.vue"
import Signup from "../cmps/signup.vue"

// import ContactDetails from '../cmps/contact-details.vue'
// import ContactEdit from '../pages/contact-edit.vue'

const routerOptions = {
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/contact",
      component: ContactIndex,
    },
    // {
    //   path: "/stats",
    //   component: Stats,
    // },
    {
        path: '/contact/:_id',
        component: ContactDetails,
    },
    {
        path: '/contact/edit/:_id?',
        component: ContactEdit,
    },
    {
      path: '/signup',
      component: Signup,
  },
    // {
    //     path: '/about',
    //     // route level code-splitting
    //     // this generates a separate chunk (About.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import('../pages/AboutView.vue'),
    // },
  ],
};
const router = createRouter(routerOptions);

export default router;
