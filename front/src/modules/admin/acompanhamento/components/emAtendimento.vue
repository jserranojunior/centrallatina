<template>
  <Administrador>
    <template #body>
      <Modal :nome="'modalFinalizarAtendimento'">
        <template #header> <span>Encerrar Atendimento</span> </template>
        <template #body
          ><span>
            <div>
              <div class="flex">
                <div class="w-full">
                  <div class="form-group text-center">
                    <h3>Deseja fazer a confirmação?</h3>
                  </div>
                </div>
              </div>
            </div>
          </span>
        </template>
        <template #footer
          ><div class="w-full">
            <div class="flex flex-wrap mt-1 justify-between">
              <div class="w-auto">
                <button class="btn-danger-tail m-1" @click="voltar()">Voltar</button>
              </div>
              <div class="w-auto ml-1">
                <button
                  class="btn-primary-tail m-1"
                  @click="finishAtendimento(atendimentoSelecionado)"
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </template>
      </Modal>

      <div class="my-2">
        <div class="flex flex-wrap justify-center pt-4">
          <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 mx-auto px-6">
            <SCard class="text-whitetheme-9 bg-whitetheme-1 dark:bg-darktheme-7">
              <template #header>
                <span class="text-whitetheme-9 font-bold"> Atendimento </span></template
              >
              <template #body>
                <div class="mt-2 dark:bg-darktheme-7 p-1">
                  <p
                    class="text-whitetheme-9 pt-2 ml-2 bg-whitetheme-1 dark:bg-darktheme-7 text-center"
                  >
                    {{ atendimentoSelecionado.user.name }}
                  </p>

                  <p
                    class="text-whitetheme-9pt-2 ml-2 bg-whitetheme-1 dark:bg-darktheme-7 text-center"
                  >
                    Local de Atendimento: {{ atendimentoSelecionado.type }}
                  </p>

                  <textarea
                    v-model="atendimentoSelecionado.observacao"
                    class="form-textarea mt-1 block w-full bg-whitetheme-1 dark:bg-darktheme-7 form-tail text-whitetheme-9a"
                    rows="10"
                    placeholder="Observação"
                  ></textarea>

                  <div class="mt-2">
                    <p>Selecione caso deseja fazer encaminhamento</p>
                    <select
                      v-model="atendimentoSelecionado.encaminhamento"
                      class="form-select block cursor-pointer w-full mt-1 bg-whitetheme-1 text-whitetheme-9 dark:bg-darktheme-7 form-tail"
                    >
                      <option value="" disabled>Selecione o encaminhamento</option>
                      <option>Advogado</option>
                      <option>Contabilidade</option>
                      <option>Apoio</option>
                      <option>Caixa</option>
                    </select>
                  </div>

                  <div class="flex justify-between">
                    <div class="w-full md:w-1/3 px-1">
                      <router-link :to="{ name: 'Atendimentos' }">
                        <div class="btn-warning-tail mt-4">Voltar</div>
                      </router-link>
                    </div>

                    <div class="w-full md:w-1/3 px-1">
                      <div
                        class="btn-primary-tail mt-4"
                        @click="modalFinalizarAtendimento()"
                      >
                        Finalizar
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
import Modal from "@/views/modals/Modal.vue";

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  components: {
    Administrador,
    Modal,
  },
  setup() {
    const useAtendimentos = inject("atendimentos");
    const useModal = inject("modal");

    const {
      inputsUserAtendimentos,
      atendimentoSelecionado,
      finishAtendimento,
    } = useAtendimentos;

    const { updateModal } = useModal;

    function modalFinalizarAtendimento() {
      updateModal({ name: "modalFinalizarAtendimento", show: true });
    }
    function voltar() {
      updateModal({ name: "modalFinalizarAtendimento", show: false });
    }

    return {
      inputsUserAtendimentos,
      atendimentoSelecionado,
      finishAtendimento,
      modalFinalizarAtendimento,
      voltar,
    };
  },
};
</script>
