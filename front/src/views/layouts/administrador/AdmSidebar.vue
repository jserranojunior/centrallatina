<template>
  <div class="w-full">
    <!-- <router-link to="/" class="nav-btn">
      <span>Home</span>
    </router-link>-->
    <img
      class="img-fluid align-middle mx-auto mb-2 rounded-lg"
      width="150"
      src="@/assets/img/logo_albank.jpeg"
    />
    <div class="py-4 artboard artboard-demo">
      <ul class="menu rounded-box w-full">
        <li class="menu-title">
          <span>Menu</span>
        </li>
        <li>
          <router-link v-if="logged" to="/admin" class="hover:bg-whitetheme-2 hover:text-white">
            <span>Home</span>
          </router-link>
        </li>
        <li>
          <router-link
            v-if="!logged"
            to="/admin/login"
            class="hover:bg-whitetheme-2 hover:text-white"
          >
            <span>Login</span>
          </router-link>
        </li>
        <li>
          <router-link
            v-if="logged && checkAcl('/admin/recepcao')"
            to="/admin/recepcao"
            class="hover:bg-whitetheme-2 hover:text-white"
          >
            <span>Iniciar Atendimento</span>
          </router-link>
        </li>
        <li>
          <router-link
            v-if="logged && checkAcl('/admin/atendimentos')"
            to="/admin/atendimentos"
            class="hover:bg-whitetheme-2 hover:text-white"
          >
            <span>Esperando Atendimento</span>
          </router-link>
        </li>
        <li>
          <router-link
            v-if="logged && checkAcl('/admin/users')"
            to="/admin/users"
            class="hover:bg-whitetheme-2 hover:text-white"
          >
            <span>Clientes</span>
          </router-link>
        </li>
        <!-- <li>
          <router-link
            v-if="logged && checkAcl('/empresas')"
            to="/empresas"
            class="hover:bg-whitetheme-2 hover:text-white"
          >Empresas</router-link>
        </li>-->
        <li v-if="logged" @click="Logout()">
          <a href="#" class="hover:bg-red-900 hover:text-white">
            <span>Sair</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
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
