<template>
  <Administrador>
    <template #body>
      <div class="my-2">
        <div class="flex flex-wrap justify-center pt-4">
          <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 mx-auto px-6">
            <div class="card shadow">
              <div class="card-body bg-white">
                <h2 class="card-title text-ms">Atendimento</h2>
                <div class="dark:bg-darktheme-7 p-1">
                  <p class="text-whitetheme-9 pt-2 ml-2 bg-whitetheme-1 dark:bg-darktheme-7">
                    <span class="font-bold">Cliente:</span>
                    {{ atendimento.cliente }}
                  </p>
                  <p class="ml-2 bg-whitetheme-1 dark:bg-darktheme-7">
                    <span class="font-bold">Assunto/Motivo:</span>
                    <br />
                    {{ atendimento.assunto }}
                  </p>
                  <p class="ml-2 bg-whitetheme-1 dark:bg-darktheme-7">
                    <span class="font-bold">VALOR:</span>
                    <br />
                    {{ intToMoney(atendimento.valor) }}
                  </p>

                  <div v-for="area in atendimento.closed_area_services" class="bg-gray-100 my-2">
                    <p class="pt-2 ml-2">
                      <span class="font-bold">Área de Atendimento:</span>
                      <br />
                      <span class>{{ filterNameAreaAtendimento(area.area) }}</span>
                    </p>
                    <p class="ml-2" v-if="area">
                      <span class="font-bold">Histórico:</span>
                      <br />
                      {{ area.historico }}
                    </p>
                    <p class="ml-2" v-if="area">
                      <span class="font-bold">Serviço:</span>
                      <br />
                      {{ area.servico }}
                    </p>
                  </div>

                  <div class="flex justify-between">
                    <div class="w-full md:w-1/3 px-1">
                      <router-link to="/admin/atendimentos">
                        <div class="btn-warning-tail mt-4">Voltar</div>
                      </router-link>
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
import { intToMoney } from "@/helpers/filters/filters";


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
      setFinishAtendimentoArea,
      intToMoney
    };
  },

};
</script>
