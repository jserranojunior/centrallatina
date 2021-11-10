<template>
  <Cliente>
    <template #cliente>
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
              <router-link to="/resetarsenha">
                <p class="underline text-right text-sm">esqueci minha senha</p>
              </router-link>
              <SBtn class="btn-primary-tail" value="Entrar" @click="Login()">Entrar</SBtn>
            </div>
          </div>
          <div v-if="auth.erro" class="btn-danger-tail text-sm mt-2 cursor-default">
            {{ auth.erro }}
          </div>
          <div v-else-if="auth.data" class="btn-success-tail text-sm mt-2 cursor-default">
            {{ auth.data }}
          </div>
        </div>
        <div class="w-full text-center text-white">
          <h3 class="text-xl my-7 font-bold">
            Não possui uma conta?
            <router-link to="/cadastro">
              <span class="text-blue-500 underline cursor-pointer">Cadastre-se</span>
            </router-link>
          </h3>
        </div>
        <div class="w-full sm:w-full md:w-1/3 lg:w-1/4 mx-auto px-6">
          <div class="flex flex-wrap row-space justify-center mt-2">
            <div class="w-auto text-center mr-8">
              <div class="icon-social text-primary text-2xl text-white">
                <a target="_blank" :href="linkWhatsApp">
                  <h5>
                    <i class="bg-white-social fab fa-whatsapp"></i>
                  </h5>
                </a>
              </div>
            </div>
            <div class="w-auto text-center mr-8">
              <div class="icon-social text-primary text-2xl text-white">
                <a target="_blank" :href="linkWhatsApp">
                  <h5>
                    <i class="bg-white-social fab fa-facebook-f"></i>
                  </h5>
                </a>
              </div>
            </div>
            <div class="w-auto text-center mr-8">
              <div class="icon-social text-primary text-2xl text-white">
                <a target="_blank" :href="linkWhatsApp">
                  <h5>
                    <i class="bg-white-social fas fa-map-marker-alt"></i>
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Cliente>
</template>

<script>
import { inject, watch } from "vue";
import { useRoute } from "vue-router";
import Cliente from "@/views/layouts/cliente/Cliente.vue";

export default {
  components: {
    Cliente,
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const route = useRoute();
    const useInstitucional = inject("institucional");
    const { linkWhatsApp } = useInstitucional;

    const useAuth = inject("auth");
    const { loginInputs, auth, Login, clearMessages } = useAuth;

    watch(
      () => route.name,
      () => {
        clearMessages();
      }
    );

    return { loginInputs, auth, Login, linkWhatsApp };
  },
};
</script>
