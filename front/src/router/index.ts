// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { createRouter, createWebHistory } from "vue-router";
// import Home from "@/modules/institucional/home.vue";

// import FinanceiroIndex from "@/modules/financeiro/pages/FinanceiroIndex.vue";
// import AdicionarConta from "@/modules/financeiro/pages/AdicionarConta.vue";
// import EditarConta from "@/modules/financeiro/pages/EditarConta.vue";
import NotFound from "@/views/layouts/NotFound.vue";
import Home from "@/modules/clientes/institucional/home.vue";
import Homeadm from "@/modules/admin/Homeadm.vue";
import LoginAdm from "@/modules/admin/authadm/pages/loginadm.vue";
import Users from "@/modules/admin/user/pages/users.vue";
import EditUser from "@/modules/admin/user/components/editUser.vue";
import Cadastro from "@/modules/clientes/auth/pages/cadastro.vue";

import Atendimentos from "@/modules/admin/acompanhamento/pages/atendimentos.vue";
import Recepcao from "@/modules/admin/acompanhamento/pages/recepcao.vue";
import setAtendimento from "@/modules/admin/acompanhamento/components/setAtendimento.vue";
import emAtendimento from "@/modules/admin/acompanhamento/components/emAtendimento.vue";
import CadEmpresas from "@/modules/clientes/institucional/CadEmpresas.vue";

import { adminAuthMiddleware } from "./middlewares/adminAuthMiddleware";
const { authadmin } = adminAuthMiddleware();

const routes = [
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cadastro",
    name: "Cadastro",
    component: Cadastro,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Homeadm,
    beforeEnter: [authadmin],
  },
  {
    path: "/admin/login",
    name: "LoginAdm",
    component: LoginAdm,
    beforeEnter: [authadmin],
  },
  {
    path: "/admin/users",
    name: "Users",
    component: Users,
    beforeEnter: [authadmin],
  },
  {
    path: "/admin/atendimentos",
    name: "Atendimentos",
    component: Atendimentos,
    beforeEnter: [authadmin],
  },
  {
    path: "/admin/recepcao",
    name: "Recepcao",
    component: Recepcao,
    beforeEnter: [authadmin],
  },
  {
    path: "/admin/addatendimento",
    name: "setAtendimento",
    component: setAtendimento,
    beforeEnter: [authadmin],
  },
  {
    path: "/admin/edittendimento",
    name: "emAtendimento",
    component: emAtendimento,
    beforeEnter: [authadmin],
  },
  {
    path: "/admin/users/edit",
    name: "EditUser",
    component: EditUser,
    beforeEnter: [authadmin],
  },
  {
    path: "/empresas",
    name: "CadEmpresas",
    component: CadEmpresas,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
