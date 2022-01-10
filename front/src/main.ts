import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/tail.css";
import money from 'v-money'
import router from "./router/index";

createApp(App).use(router).use(money).mount("#app");

// const MASKMONEY = {
//           decimal: ',',
//           thousands: '.',
//           prefix: 'R$ ',
//           suffix: ' #',
//           precision: 2,
//           masked: false
//         }