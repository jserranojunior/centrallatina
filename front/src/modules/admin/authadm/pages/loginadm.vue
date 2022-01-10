<template>
  <Administrador>
    <template #body>
      <div class="flex flex-wrap justify-center pt-4">
        <div class="w-full sm:w-full md:w-1/2 lg:w-1/3 mx-auto">
          <div class="card shadow bg-white">
            <div class="card-body flex">
              <div class="w-auto mx-auto text-center">
                <!-- <img class="img-fluid" width="150" src="@/assets/img/logo_albank.jpeg" alt /> -->
              </div>
              <h2 class="card-title">Login</h2>
              <div class="mt-2">
                <form action>
                  <input
                    type="email"
                    v-model="loginInputs.email"
                    placeholder="Digite seu e-mail"
                    class="input input-bordered input-sm mt-2 w-full"
                  />

                  <input
                    type="password"
                    v-model="loginInputs.password"
                    placeholder="Digite sua senha"
                    class="input input-bordered input-sm mt-2 w-full"
                  />
                </form>

                <p class="underline text-right text-sm">esqueci minha senha</p>
                <button class="btn btn-primary btn-sm mt-2" @click="LoginAdm()">Entrar</button>
              </div>
              <div
                v-if="authadm.erro"
                class="btn-danger-tail text-sm mt-2 cursor-default"
              >{{ authadm.erro }}</div>
              <div
                v-else-if="authadm.data"
                class="btn-success-tail text-sm mt-2 cursor-default"
              >{{ authadm.data }}</div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Administrador>
</template>

<script>
import { inject, watch } from "vue";
import { useRoute } from "vue-router";
import Administrador from "@/views/layouts/administrador/Administrador.vue";

export default {
  components: {
    Administrador,
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const route = useRoute();
    const useInstitucional = inject("institucional");
    const { linkWhatsApp } = useInstitucional;

    const useAuthAdm = inject("authadm");
    const { loginInputs, authadm, LoginAdm, clearMessages } = useAuthAdm;

    watch(
      () => route.name,
      () => {
        clearMessages();
      }
    );

    return { loginInputs, authadm, LoginAdm, linkWhatsApp };
  },
};
</script>
