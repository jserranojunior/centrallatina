<template>
  <Administrador>
    <template #body>
      <Modal :nome="'modalFinalizarAtendimento'">
        <template #header>
          <span>Encerrar Atendimento</span>
        </template>
        <template #body>
          <span>
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
        <template #footer>
          <div class="w-full">
            <div class="flex flex-wrap mt-1 justify-between">
              <div class="w-auto">
                <button class="btn-danger-tail m-1" @click="voltar()">Voltar</button>
              </div>
              <div class="w-auto ml-1">
                <button class="btn-primary-tail m-1" @click="setFinishAtendimentoArea()">Confirmar</button>
              </div>
            </div>
          </div>
        </template>
      </Modal>

      <div class="my-2">
        <div class="flex flex-wrap justify-center pt-4">
          <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 mx-auto px-6">
            <div class="card shadow">
              <div class="card-body bg-white">
                <h2 class="card-title text-ms">Atendimento</h2>
                <div class="dark:bg-darktheme-7 p-1">
                  <p
                    class="text-whitetheme-9 pt-2 ml-2 bg-whitetheme-1 dark:bg-darktheme-7 text-center"
                  >
                    Cliente:
                    <span class="font-bold">{{ atendimento.cliente }}</span>
                  </p>

                  <p
                    class="text-whitetheme-9pt-2 ml-2 bg-whitetheme-1 dark:bg-darktheme-7 text-center"
                  >
                    Área de Atendimento:
                    <span
                      class="font-bold"
                      v-if="open_area_atendimento && open_area_atendimento.area"
                    >{{ filterNameAreaAtendimento(open_area_atendimento.area) }}</span>
                  </p>
                  <textarea
                    v-model="atendimento.assunto"
                    class="form-textarea mt-1 block w-full bg-whitetheme-1 dark:bg-darktheme-7 form-tail text-whitetheme-9"
                    rows="6"
                    placeholder="Assunto/Motivo"
                  ></textarea>
                  <div class="mt-1">
                    <textarea
                      v-model="open_area_atendimento.historico"
                      class="form-textarea mt-1 block w-full bg-whitetheme-1 dark:bg-darktheme-7 form-tail text-whitetheme-9"
                      rows="6"
                      placeholder="Histórico"
                    ></textarea>
                  </div>

                  <div class="mt-1">
                    <input
                      type="text"
                      class="input input-bordered input-sm w-full my-1"
                      placeholder="SERVIÇO"
                      v-model="open_area_atendimento.servico"
                    />
                  </div>

                  <div class="mt-1">
                    <input
                      type="text"
                      class="input input-bordered input-sm w-full my-1"
                      placeholder="VALOR"
                      v-model.lazy="valueMask"
                      v-money="money"
                    />
                    <!-- <money v-model="valueMask" v-bind="money" class="form-input input-lg"></money> -->
                  </div>
                  <div class="mt-2">
                    <p>Selecione caso deseja fazer encaminhamento</p>
                    <select
                      v-model="encaminhamento"
                      class="input input-bordered input-sm w-full my-1 cursor-pointer"
                    >
                      <option value disabled>Selecione o encaminhamento</option>
                      <option value="1">Advocacia</option>
                      <option value="2">Arquitetura</option>
                      <option value="3">Certificação digital</option>
                      <option value="4">Comunicação</option>
                      <option value="5">Contabilidade</option>
                      <option value="6">Cursos</option>
                      <option value="7">Despachante</option>
                      <option value="8">Engenharia</option>
                      <option value="9">Financeiro</option>
                      <option value="10">Imobiliária</option>
                      <option value="11">Investimento</option>
                      <option value="12">Medicina</option>
                      <option value="13">Oalbank</option>
                      <option value="14">Projetos</option>
                      <option value="15">Serviços cartorário</option>
                    </select>
                  </div>

                  <div class="flex justify-between">
                    <div class="w-full md:w-1/3 px-1">
                      <router-link to="/admin/esperandoatendimentos">
                        <div class="btn-warning-tail mt-4">Voltar</div>
                      </router-link>
                    </div>

                    <div class="w-full md:w-1/3 px-1">
                      <div
                        class="btn-primary-tail mt-4"
                        @click="modalFinalizarAtendimento()"
                      >Finalizar</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Administrador>
</template>

<script lang="ts">
import { inject, onBeforeMount, reactive, toRefs, watch } from 'vue';
import Administrador from "@/views/layouts/administrador/Administrador.vue";
import Modal from "@/views/modals/Modal.vue";


export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  components: {
    Administrador,
    Modal,
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {

    const state = reactive({
      valueMask: 0 as any,
      money: {
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        precision: 2,
        masked: false
      }
    })
    const useAtendimentos: any = inject("atendimentos");
    const useModal: any = inject("modal");

    const {
      inputsUserAtendimentos,
      atendimento,
      finishAtendimento,
      open_area_atendimento,
      encaminhamento,
      filterNameAreaAtendimento,
      setAtendimentoValue
    } = useAtendimentos;

    const { updateModal } = useModal;

    function modalFinalizarAtendimento() {
      updateModal({ name: "modalFinalizarAtendimento", show: true });
    }
    function voltar() {
      updateModal({ name: "modalFinalizarAtendimento", show: false });
    }
    function formatReal(int: number) {
      var tmp = int + '';
      tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
      if (tmp.length > 6)
        tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

      return tmp;
    }
    watch(atendimento, () => {
      state.valueMask = atendimento.value.valor

    })
    onBeforeMount(() => {
      state.valueMask = atendimento.value.valor

    })
    function setFinishAtendimentoArea() {
      filterAtendimentoValue().then(async () => {
        await finishAtendimento()
      })
    }
    async function filterAtendimentoValue() {
      let moneyFilter = state.valueMask
      moneyFilter = moneyFilter.replaceAll('.', '');
      moneyFilter = moneyFilter.replaceAll(',', '');
      moneyFilter = moneyFilter.replaceAll('R$ ', '');
      // moneyFilter = parseFloat(moneyFilter)
      moneyFilter = parseInt(moneyFilter, 10)
      setAtendimentoValue(moneyFilter)
    }
    // watch(state.valueMask, () => {

    // })
    return {
      ...toRefs(state),
      inputsUserAtendimentos,
      atendimento,
      modalFinalizarAtendimento,
      voltar,
      open_area_atendimento,
      encaminhamento,
      filterNameAreaAtendimento,
      formatReal,
      filterAtendimentoValue,
      setFinishAtendimentoArea
    };
  },

};
</script>
