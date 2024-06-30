import { createApp } from 'vue';
import App from './App.vue';
import router from './routers/router';
import { worker } from './mocks/browser'; // Certifique-se de que o caminho está correto
import { registerPlugins } from '@/plugins';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

const app = createApp(App);
registerPlugins(app);

app.use(router);

app.mount('#app');
