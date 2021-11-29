<template>
  <Administrador>
    <template #body>
      <div class="my-2">
        <div class="flex flex-wrap justify-center pt-4">
          <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 mx-auto px-6">
            <SCard class="text-whitetheme-9 bg-whitetheme-1 dark:bg-darktheme-7">
              <template #header>
                <span class="font-bold"> Selecione o Atendimento </span></template
              >
              <template #body>
                <div class="mt-2 bg-whitetheme-1 dark:bg-darktheme-7 p-1">
                  <p class="pt-2 ml-2 bg-whitetheme-1 dark:bg-darktheme-7 text-center">
                    {{ userSelected.name }}
                  </p>

                  <select
                    v-model="userSelected.atendimento.type"
                    class="form-select block cursor-pointer w-full mt-1 bg-whitetheme-1 dark:bg-darktheme-7 form-tail text-whitetheme-9"
                  >
                    <option value="" disabled>Selecione o local</option>
                    <option>Advogado</option>
                    <option>Contabilidade</option>
                    <option>Apoio</option>
                    <option>Caixa</option>
                  </select>

                  <textarea
                    v-model="userSelected.atendimento.observacao"
                    class="form-textarea mt-1 block w-full bg-whitetheme-1 dark:bg-darktheme-7 form-tail text-whitetheme-9"
                    rows="10"
                    placeholder="Observação"
                  ></textarea>

                  <!-- <div class="relative">
                    <select
                      v-model="inputsUserAtendimentos.tipo"
                      class="form-tail p-1 mb-1"
                    >
                     
                    </select>
                    <div class="form-select-arrow">
                      <svg class="h-4 w-4">
                        <use xlink:href="#arrowdown" />
                      </svg>
                    </div>
                  </div> -->

                  <div class="flex">
                    <div class="w-full md:w-1/2 px-1">
                      <router-link :to="{ name: 'Recepcao' }">
                        <div class="btn-warning-tail mt-4">Voltar</div>
                      </router-link>
                    </div>
                    <div class="w-full md:w-1/2 px-1">
                      <div
                        class="btn-primary-tail mt-4"
                        @click="addAtendimento(userSelected.atendimento)"
                      >
                        Salvar
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </SCard>
          </div>
        </div>
      </div>
    </template>
  </Administrador>
</template>

<script>
import { inject } from "vue";
import Administrador from "@/views/layouts/administrador/Administrador.vue";

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  components: {
    Administrador,
  },
  setup() {
    const useAtendimentos = inject("atendimentos");
    const { inputsUserAtendimentos, userSelected, addAtendimento } = useAtendimentos;
    return { inputsUserAtendimentos, userSelected, addAtendimento };
  },
};
</script>
