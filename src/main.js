import { createApp } from "vue";
import { createPinia } from 'pinia';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import { router } from './router';
import App from "./App.vue";

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
