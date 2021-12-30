<template>
  <div class="my-2">
    <div class="flex flex-wrap justify-center pt-4">
      <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 mx-auto px-6">
        <SCard class="text-whitetheme-9 bg-whitetheme-1 dark:bg-darktheme-7">
          <template #header>
            <span class="font-bold">Iniciar o Atendimento</span>
          </template>
          <template #body>
            <div class="bg-whitetheme-1 dark:bg-darktheme-7 p-1">
              <p
                class="pt-2 ml-2 bg-whitetheme-1 dark:bg-darktheme-7 text-center"
              >{{ userSelected.name }}</p>
              <input
                type="text"
                class="input input-bordered input-sm w-full my-1"
                placeholder="Nome atendente"
              />
              <input
                type="text"
                class="input input-bordered input-sm w-full my-1"
                placeholder="Nome Completo do atendido"
              />
              <input
                type="text"
                class="input input-bordered input-sm w-full my-1"
                placeholder="Telefone"
              />

              <select
                v-model="userSelected.atendimento.type"
                class="input input-bordered input-sm w-full my-1 cursor-pointer"
              >
                <option value disabled>Selecione o local</option>
                <option>Advocacia</option>
                <option>Contabilidade</option>
                <option>Certificação digital</option>
                <option>Imobiliária</option>
                <option>Engenharia</option>
                <option>Arquitetura</option>
                <option>Oalbank</option>
                <option>Projetos</option>
                <option>Comunicação</option>
                <option>Despachante</option>
                <option>Serviços cartorário</option>
                <option>Medicina</option>
              </select>
              <textarea
                v-model="userSelected.atendimento.observacao"
                class="form-textarea mt-1 block w-full bg-whitetheme-1 dark:bg-darktheme-7 form-tail text-whitetheme-9"
                rows="10"
                placeholder="Observação/Motivo"
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
              </div>-->

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
                  >Salvar</div>
                </div>
              </div>
            </div>
          </template>
        </SCard>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { inject } from "vue";

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  components: {
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const useAtendimentos = inject("atendimentos");
    const { inputsUserAtendimentos, userSelected, addAtendimento } = useAtendimentos;
    return { inputsUserAtendimentos, userSelected, addAtendimento };
  },
};
</script>
