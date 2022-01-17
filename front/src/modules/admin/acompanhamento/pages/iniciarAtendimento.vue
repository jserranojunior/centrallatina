<template>
  <Administrador>
    <template #body>
      <setAtendimento></setAtendimento>
    </template>
  </Administrador>
</template>
<script lang="ts">
import { onBeforeMount } from "vue";
import { dateUsToPtBr } from "@/helpers/dates/helpersDates";
import setAtendimento from "../components/setAtendimento.vue";
import Administrador from "@/views/layouts/administrador/Administrador.vue";

export default {
  components: {
    setAtendimento,
    Administrador
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    // const useUsers = inject("users");
    // const useAtendimentos = inject("atendimentos");
    // const { selectUserAtendimento } = useAtendimentos;
    // const { users, getAllUsers } = useUsers;
    onBeforeMount(async () => {
      // await getAllUsers();
    });
    return { dateUsToPtBr };
  },
};
</script>
