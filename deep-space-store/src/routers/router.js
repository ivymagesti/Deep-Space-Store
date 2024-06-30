import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Purchase from '@/views/Purchase.vue';

const routes = [
  { path: "/", 
  name: "Home",
  component: Home },

  { path: "/001", 
  name: "Purchase",
  component: Purchase },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
