<template>
  <Administrador>
    <template #body>
      <div class="flex flex-wrap justify-center pt-4">
        <div class="w-full">
          <h3 class="text-2xl text-center">Bem vindo!</h3>
        </div>
      </div>
    </template>
  </Administrador>
</template>

<script>
import Administrador from "@/views/layouts/administrador/Administrador.vue";

export default {
  components: {
    Administrador,
  },
};
</script>
