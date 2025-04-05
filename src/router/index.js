import { createRouter, createWebHistory } from 'vue-router';
import '../style.css';
import Home from '../views/Home.vue';

const routes = [
  { path: '/', component: Home }, // Route for the home page
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;