<template>
  <router-view></router-view>
</template>

<script>
import { Provides } from "./provides/index";
export default {
  name: "App",
  components: {},

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    Provides();
  },
};
</script>
<style>
@import "../node_modules/slifer/src/assets/styles/slifer-style.css";
</style>
