import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import TPurchase from '@/views/TPurchase.vue';
import TForm from '@/views/TForm.vue';
import TPayment from '@/views/TPayment.vue'

const routes = [
  { path: "/", 
  name: "Home",
  component: Home },

  { path: "/:code", 
  name: "Purchase",
  component: TPurchase,
  props: true },

  { path: "/form", 
  name: "Form",
  component: TForm },

  { path: "/payment", 
  name: "Payment",
  component: TPayment },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
