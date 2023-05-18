import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import { router } from './router';
import App from "./App.vue";

createApp(App).use(router).mount("#app");
