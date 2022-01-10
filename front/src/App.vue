<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { Provides } from "./provides/index";
import * as obelisk from "alvitre-obelisk"

export default {
  name: "App",
  components: {},

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    console.log(obelisk.limitText("HEEEEEELOOO", 5))
    Provides();
  },
};
</script>

