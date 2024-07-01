import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import TPurchase from '@/views/TPurchase.vue';

const routes = [
  { path: "/", 
  name: "Home",
  component: Home },

  { path: "/001", 
  name: "Purchase",
  component: TPurchase },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
