<template>
  <div class="flex flex-wrap justify-between">
    <div class="my-auto bg-blue-800 hover:bg-gray-800 rounded-full w-auto">
      <div class="p-4 cursor-pointer" @click="closeSidebar()">
        <svg
          viewBox="0 0 100 80"
          width="18"
          height="18"
          class="fill-current text-gray-300"
        >
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      </div>
    </div>
    <div class="text-gray-700 bg-blue-900 rounded-xl w-11/12">
      <!-- <div class="flex max-w-screen px-2 mx-auto"> -->
      <div class="p-2 flex flex-wrap justify-between my-auto items-center mx-2">
        <div>
          <a href="#" class="text-lg font-semibold uppercase text-white">Intellect</a>
        </div>

        <div class="">
          <nav :class="'flex flex-wrap my-auto ' + { flex: open, hidden: !open }">
            <router-link
              :to="{ name: 'Home' }"
              class="px-4 py-2 text-sm font-semibold rounded-lg focus:shadow-outline mx-1 md:mt-0 text-gray-400 hover:bg-gray-900 focus:bg-gray-600 hover:text-bg-gray-300"
              >Home
            </router-link>
            <router-link
              v-if="auth && !auth.token"
              :to="{ name: 'Login' }"
              class="px-4 py-2 text-sm font-semibold rounded-lg focus:shadow-outline mx-1 md:mt-0 text-gray-400 hover:bg-gray-900 focus:bg-gray-600 hover:text-bg-gray-300"
              href="#"
              >Login
            </router-link>
            <router-link
              v-if="auth.token"
              :to="{ name: 'Cadastro' }"
              class="px-4 py-2 text-sm font-semibold rounded-lg focus:shadow-outline mx-1 md:mt-0 text-gray-400 hover:bg-gray-900 focus:bg-gray-600 hover:text-bg-gray-300"
              href="#"
              >Cadastro
            </router-link>
            <router-link
              v-if="auth.token"
              :to="{ name: 'Financeiro' }"
              class="px-4 py-2 text-sm font-semibold rounded-lg focus:shadow-outline mx-1 md:mt-0 text-gray-400 hover:bg-gray-900 focus:bg-gray-600 hover:text-bg-gray-300"
              href="#"
            >
              Financeiro</router-link
            >

            <a
              v-if="auth.token"
              class="px-4 py-2 text-sm font-semibold rounded-lg focus:shadow-outline mx-1 md:mt-0 text-gray-400 hover:bg-gray-900 focus:bg-gray-600 hover:text-bg-gray-300"
              href="#"
              @click="Logout()"
              >Sair
            </a>
          </nav>
        </div>
        <!-- </div> -->
        <!--  -->
      </div>
    </div>
  </div>
</template>

<script>
import { useLayouts } from "../use";
import { inject } from "vue";

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const useAuth = inject("auth");

    const { closeSidebar, open } = useLayouts();

    const { Logout, auth, fields } = useAuth;

    return { Logout, auth, closeSidebar, open, fields };
  },
};
</script>
