<template>
  <Administrador>
    <template #body>
      <div class="flex flex-wrap justify-center pt-4">
        <div class="w-full sm:w-full md:w-1/2 lg:w-1/3 mx-auto px-6">
          <div class="flex flex-wrap margin-bottom-4 margin-topo justify-center">
            <div class="w-auto text-center">
              <img
                class="img-fluid"
                width="150"
                src="@/assets/img/logo_albank.jpeg"
                alt=""
              />
            </div>
          </div>
          <div class="text-white text-center">
            <div class="font-bold text-2xl mt-6">Login</div>
            <div class="mt-2">
              <form action="">
                <SInputT
                  v-model="loginInputs.email"
                  class="mt-2 form-tail"
                  placeholder="Digite seu e-mail"
                ></SInputT>
                <SInputP
                  v-model="loginInputs.password"
                  class="mt-2 text-black"
                  placeholder="Digite sua senha"
                ></SInputP>
              </form>

              <p class="underline text-right text-sm">esqueci minha senha</p>
              <SBtn class="btn-primary-tail" value="Entrar" @click="LoginAdm()"
                >Entrar</SBtn
              >
            </div>
          </div>
          <div v-if="authadm.erro" class="btn-danger-tail text-sm mt-2 cursor-default">
            {{ authadm.erro }}
          </div>
          <div
            v-else-if="authadm.data"
            class="btn-success-tail text-sm mt-2 cursor-default"
          >
            {{ authadm.data }}
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
