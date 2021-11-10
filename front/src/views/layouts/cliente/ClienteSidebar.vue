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
    <router-link v-if="!logged" to="/login" class="nav-btn">
      <span>Login</span>
    </router-link>
    <router-link v-if="!logged" to="/cadastro" class="nav-btn">
      <span>Cadastro</span>
    </router-link>
    <router-link v-if="!logged" to="/maquininha" class="nav-btn">
      <span>Maquininha</span>
    </router-link>
    <router-link v-if="logged" to="/" class="nav-btn">
      <span>Home</span>
    </router-link>
    <router-link v-if="logged" to="/" class="nav-btn bg-gray-200">
      <span>Saldo</span>
    </router-link>
    <div v-if="logged" class="nav-btn bg-red-600 cursor-pointer" @click="Logout()">
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
    const useAuth = inject("auth");
    const { Logout, admin, logged, isAdmin, isLogged, getUserID } = useAuth;
    onMounted(async () => {
      await isLogged();
    });
    const state = reactive({
      sidebarHeight: 0,
    });

    watch(logged, async () => {
      await getUserID().then(async () => {
        await isAdmin();
      });
    });

    return { ...state, Logout, admin, logged };
  },
};
</script>
