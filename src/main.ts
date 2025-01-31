// src/main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@arco-design/web-vue/dist/arco.css';
import ArcoVue from '@arco-design/web-vue';
import '@/plugins/axios';
import '@/access/index';
import 'ant-design-vue/dist/reset.css';
import 'bytemd/dist/index.css';
import './utils/rem';
import mitt from 'mitt';
// @ts-ignore


const app = createApp(App);

app.config.globalProperties.$mitt = mitt();

app.use(ArcoVue).use(store).use(router).mount('#app');


