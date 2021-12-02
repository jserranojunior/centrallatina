<template>
  <div class="w-full">
    <!-- <router-link to="/" class="nav-btn">
      <span>Home</span>
    </router-link> -->
    <img
      class="img-fluid align-middle mx-auto mb-2 rounded-lg"
      width="150"
      src="@/assets/img/logo_albank.jpeg"
      alt=""
    />
    <router-link v-if="!logged" to="/admin/login" class="nav-btn nav-btn-adm">
      <span>Login</span>
    </router-link>
    <router-link v-if="logged" to="/admin" class="nav-btn nav-btn-adm">
      <span>Home</span>
    </router-link>
    <router-link
      v-if="logged && checkAcl('/admin/users')"
      to="/admin/users"
      class="nav-btn nav-btn-adm"
    >
      <span>Clientes</span>
    </router-link>
    <router-link
      v-if="logged && checkAcl('/admin/recepcao')"
      to="/admin/recepcao"
      class="nav-btn nav-btn-adm"
    >
      <span>Recepção</span>
    </router-link>
    <router-link
      v-if="logged && checkAcl('/admin/atendimentos')"
      to="/admin/atendimentos"
      class="nav-btn nav-btn-adm"
    >
      <span>Advocacia</span>
    </router-link>
    <router-link
      v-if="logged && checkAcl('/admin/atendimentos')"
      to="/admin/atendimentos"
      class="nav-btn nav-btn-adm"
    >
      <span>Contabilidade </span>
    </router-link>
    <router-link
      v-if="logged && checkAcl('/admin/atendimentos')"
      to="/admin/atendimentos"
      class="nav-btn nav-btn-adm"
    >
      <span>Certificação digital </span>
    </router-link>

    <router-link
      v-if="logged && checkAcl('/admin/atendimentos')"
      to="/admin/atendimentos"
      class="nav-btn nav-btn-adm"
    >
      <span>Imobiliária</span>
    </router-link>
    <router-link
      v-if="logged && checkAcl('/admin/atendimentos')"
      to="/admin/atendimentos"
      class="nav-btn nav-btn-adm"
    >
      <span>Engenharia </span>
    </router-link>
    <router-link
      v-if="logged && checkAcl('/admin/atendimentos')"
      to="/admin/atendimentos"
      class="nav-btn nav-btn-adm"
    >
      <span>Arquitetura </span>
    </router-link>
    <router-link
      v-if="logged && checkAcl('/admin/atendimentos')"
      to="/admin/atendimentos"
      class="nav-btn nav-btn-adm"
    >
      <span>Oalbank</span>
    </router-link>
    <router-link
      v-if="logged && checkAcl('/admin/atendimentos')"
      to="/admin/atendimentos"
      class="nav-btn nav-btn-adm"
    >
      <span>Projetos</span>
    </router-link>
    <router-link
      v-if="logged && checkAcl('/admin/atendimentos')"
      to="/admin/atendimentos"
      class="nav-btn nav-btn-adm"
    >
      <span>Comunicação </span>
    </router-link>

    <div v-if="logged" class="nav-btn nav-btn-exit cursor-pointer" @click="Logout()">
      <span>Sair</span>
    </div>
  </div>
</template>

<script>
import { reactive, inject, onMounted, watch } from "vue";
export default {
  name: "Sidebar",
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  /* eslint-disable @typescript-eslint/explicit-module-boundary-types */

  setup() {
    const useAuthAdm = inject("authadm");
    const {
      Logout,
      logged,
      isLoggedAdm,
      getAdminID,
      userAdminInfo,
      getAdminInfo,
      checkAcl,
    } = useAuthAdm;
    onMounted(async () => {
      await isLoggedAdm();
    });
    const state = reactive({
      sidebarHeight: 0,
    });

    watch(logged, async () => {
      await getAdminID();
      await getAdminInfo();
    });

    return { ...state, Logout, logged, userAdminInfo, checkAcl };
  },
};
</script>
