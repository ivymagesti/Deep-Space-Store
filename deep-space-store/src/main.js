import { createApp } from 'vue';
import App from './App.vue';
import router from './routers/router';
import { worker } from './mocks/browser'; 
import { registerPlugins } from '@/plugins';

if (process.env.NODE_ENV === 'development') {
  await worker.start();
}


const app = createApp(App);
registerPlugins(app);

app.use(router);

app.mount('#app');
