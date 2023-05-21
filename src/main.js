import { createApp } from "vue";
import { createPinia } from 'pinia';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import "./assets/css/blobz.css";
import AppLoader from './components/AppLoader.vue';
import { router } from './router';
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.component('AppLoader', AppLoader);
app.mount("#app");
