<template>
  <div class="my-2">
    <div class="flex flex-wrap justify-center pt-4">
      <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 mx-auto px-6">
        <div class="card card-bordered bg-white">
          <div class="card-body">
            <h2 class="card-title text-md">Iniciar o Atendimento</h2>

            <div class="bg-whitetheme-1 dark:bg-darktheme-7 p-1">
              <!-- <p
                class="pt-2 ml-2 bg-whitetheme-1 dark:bg-darktheme-7 text-center"
              >{{ userSelected.name }}</p>-->
              <span
                class="float-right"
              >{{ dateUsToPtBr(atendimento.data) }} - {{ atendimento.hora }}</span>
              <select
                v-model="atendimento.recepcionista"
                class="input input-bordered input-sm w-full my-1 cursor-pointer"
              >
                <option value disabled>Selecione o atendente</option>
                <option>David Lira</option>
                <option>Deise</option>
                <option>Elizabeth</option>
                <option>Maysa</option>
              </select>

              <input
                type="text"
                class="input input-bordered input-sm w-full my-1"
                placeholder="Nome Completo do cliente"
                v-model="atendimento.cliente"
              />
              <input
                type="text"
                class="input input-bordered input-sm w-full my-1"
                placeholder="Telefone"
                v-model="atendimento.telefone"
              />
              <!-- v-model="userSelected.atendimento.type" -->

              <select
                class="input input-bordered input-sm w-full my-1 cursor-pointer"
                v-model="open_area_atendimento.area"
              >
                <option value disabled>Selecione a área</option>
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
              <!-- v-model="userSelected.atendimento.observacao" -->

              <textarea
                class="form-textarea mt-1 block w-full bg-whitetheme-1 dark:bg-darktheme-7 form-tail text-whitetheme-9"
                rows="10"
                placeholder="Assunto/Motivo"
                v-model="atendimento.assunto"
              />
              <div class="flex">
                <div class="w-full md:w-1/2 px-1">
                  <!-- <router-link :to="{ name: 'Recepcao' }">
                    <div class="btn-warning-tail mt-4">Voltar</div>
                  </router-link>-->
                </div>
                <div class="w-full md:w-1/2 px-1">
                  <div class="btn-primary-tail mt-4" @click="addAtendimento()">Salvar</div>
                  <!-- @click="addAreaAtendimento(userSelected.atendimento)" -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, onBeforeMount, watch } from 'vue'
import { dateUsToPtBr } from '@/helpers/dates/helpersDates'
import { toRefs, reactive } from 'vue'
import { useRoute } from 'vue-router';

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  components: {},
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const route = useRoute();

    const state = reactive({
      actual_date: new Date(),
    })
    const useAtendimentos: any = inject('atendimentos')
    const {
      addAtendimento,
      atendimento,
      open_area_atendimento,
      clearAtendimentos
    } = useAtendimentos
    // return { inputsUserAtendimentos, userSelected,  };

    onBeforeMount(() => {
      clearAtendimentos()
    })
    watch(() => route.name, () => {
      clearAtendimentos()
    });

    return { ...toRefs(state), atendimento, addAtendimento, dateUsToPtBr, open_area_atendimento }
  },
}
</script>
