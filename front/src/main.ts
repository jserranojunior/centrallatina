import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/tail.css";
import Maska from "maska";
import slifer from "slifer";
import router from "./router/index";

createApp(App).use(router).use(Maska).use(slifer).mount("#app");
