<template>
  <div>
    <div class="flex bg-central-1 p-5">
      <div class="ml-auto">
        <img width="50" src="@/assets/img/logo/logo.jpg" alt="" />
      </div>
      <div class="text-white text-center align-middle mr-auto my-auto text-sm">
        <p class="pl-6">Central Latina ®| 2021 - Direitos reservados</p>
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
