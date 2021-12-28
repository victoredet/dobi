import { createApp } from 'vue'
import App from './App.vue'
import {router} from './routes';
import Vuex from 'vuex';
import store from './store';

const app = createApp(App);

app.use(router)
app.use(Vuex)
app.use(store)

app.mount('#app');
