import { createApp } from 'vue';
import App from './App.vue';
import router from './route';

const app = createApp(App);
app.config.performance = true;
app.use(router).mount('#app');
