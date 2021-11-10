<template>
  <div class="p-2 bg-albank-2 min-h-screen">
    <!-- <vue-particles color="#dedede"></vue-particles> -->

    <div class="rounded-2xl">
      <!-- <Navbar></Navbar> -->
    </div>
    <!-- <Sidebar></Sidebar> -->
    <div class="rounded-2xl mt-2">
      <div class="">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import Navbar from "./Navbar.vue";
// import Sidebar from "./Sidebar.vue";
// import { inject } from "vue";

export default {
  name: "Main",
  components: {},
  setup(): void {
    // const useAuth = inject("auth");
    // const { isLogged } = useAuth;
    // isLogged();
  },
};
</script>
