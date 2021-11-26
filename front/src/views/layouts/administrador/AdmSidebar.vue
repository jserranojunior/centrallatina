<template>
  <div class="w-full">
    <!-- <router-link to="/" class="nav-btn">
      <span>Home</span>
    </router-link> -->
    <img
      class="img-fluid align-middle mx-auto mb-2"
      width="46"
      src="@/assets/img/logo_albank.jpeg"
      alt=""
    />

    <router-link v-if="!logged" to="/admin/login" class="nav-btn nav-btn-adm">
      <span>Login</span>
    </router-link>
    <router-link v-if="logged" to="/admin" class="nav-btn nav-btn-adm">
      <span>Home</span>
    </router-link>
    <router-link v-if="logged" to="/admin/users" class="nav-btn nav-btn-adm">
      <span>Clientes</span>
    </router-link>
    <router-link v-if="logged" to="/admin/recepcao" class="nav-btn nav-btn-adm">
      <span>Recepção</span>
    </router-link>
    <router-link v-if="logged" to="/admin/atendimentos" class="nav-btn nav-btn-adm">
      <span>Advocacia</span>
    </router-link>
    <router-link v-if="logged" to="/admin/atendimentos" class="nav-btn nav-btn-adm">
      <span>Consultoria</span>
    </router-link>
    <router-link v-if="logged" to="/admin/atendimentos" class="nav-btn nav-btn-adm">
      <span>Rádio</span>
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
    const { Logout, logged, isLoggedAdm, getAdminID } = useAuthAdm;
    onMounted(async () => {
      await isLoggedAdm();
    });
    const state = reactive({
      sidebarHeight: 0,
    });

    watch(logged, async () => {
      await getAdminID();
    });

    return { ...state, Logout, logged };
  },
};
</script>
