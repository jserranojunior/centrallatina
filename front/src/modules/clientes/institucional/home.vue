<template>
  <Cliente>
    <template #cliente>
      <div class="flex flex-wrap justify-center bg-central-2">
        <div class="w-full my-8">
          <a href="http://conta.oalbank.com/">
            <img class="mx-auto" src="@/assets/img/banner/banner-home.jpeg" alt />
          </a>
        </div>
      </div>
    </template>
  </Cliente>
</template>

<script>
// import { inject, watch } from "vue";
// import { useRoute } from "vue-router";
import Cliente from "@/views/layouts/cliente/Cliente.vue";

export default {
  components: {
    Cliente,
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  // setup() {
  //   const route = useRoute();
  //   const useAuth = inject("auth");
  //   const { Logout } = useAuth;

  //   watch(
  //     () => route.name,
  //     () => {
  //       console.log("Ta Rolando");
  //     }
  //   );

  //   return { Logout };
  // },
};
</script>
