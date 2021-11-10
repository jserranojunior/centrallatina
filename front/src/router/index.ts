// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { createRouter, createWebHistory } from "vue-router";
// import Home from "@/modules/institucional/home.vue";

// import FinanceiroIndex from "@/modules/financeiro/pages/FinanceiroIndex.vue";
// import AdicionarConta from "@/modules/financeiro/pages/AdicionarConta.vue";
// import EditarConta from "@/modules/financeiro/pages/EditarConta.vue";
import NotFound from "@/views/layouts/NotFound.vue";
import Home from "@/modules/clientes/institucional/home.vue";

const routes = [
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
