<template>
  <Administrador>
    <template #body>
      <div class="card card-bordered bg-white">
        <div class="card-body">
          <h2 class="card-title text-sm">ATENDIMENTOS - AGUARDANDO</h2>
          <table class="table-tail table-tail-adm">
            <thead class="text-whitetheme-9 bg-whitetheme-1 dark:bg-darktheme-7">
              <tr>
                <th>#</th>
                <th>Cliente</th>
                <th>Local de Atendimento</th>
                <th>Assunto/Motivo</th>
                <th>Data</th>
                <th>Hora</th>
              </tr>
            </thead>
            <tbody class="text-left">
              <tr
                v-for="atendimento in atendimentos"
                :key="atendimento.ID"
                @click="getAtendimentoSelecionadoWithLastArea(atendimento.ID)"
              >
                <td>{{ atendimento.ID }}</td>
                <td>{{ atendimento.cliente }}</td>
                <!-- Puxar última àrea -->
                <td>
                  <span
                    v-if="atendimento.open_area_services && atendimento.open_area_services[0] && atendimento.open_area_services[0].area"
                  >{{ filterNameAreaAtendimento(atendimento.open_area_services[0].area) }}</span>
                </td>
                <td>{{ limitarTexto(atendimento.assunto, 20) }}</td>
                <td>{{ dateUsToPtBr(atendimento.data) }}</td>
                <td>{{ atendimento.hora }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!--  -->
    </template>
  </Administrador>
</template>
<script lang="ts">
import { inject, onBeforeMount, watch } from "vue";
import { dateUsToPtBr } from "@/helpers/dates/helpersDates";
import Administrador from "@/views/layouts/administrador/Administrador.vue";
import { limitarTexto } from "@/helpers/filters/filters";
import { useRoute } from "vue-router";

export default {
  components: {
    Administrador,
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const useAtendimentos: any = inject("atendimentos");
    const useAuthAdm: any = inject("authadm");
    // const route = useRoute();

    const {
      atendimentos,
      getAllAtendimentosPendente,
      getAtendimentoSelecionadoWithLastArea,
      filterNameAreaAtendimento
    } = useAtendimentos;

    const { checkAcl } = useAuthAdm;

    onBeforeMount(async () => {
      await getAllAtendimentosPendente();
    });

    //  watch(
    //   () => route.name,
    //   () => {
    //       await redirect();
    //   }
    // );

    // async function redirect() {
    //   const acl = await checkAcl(route.name);
    //   console.log(acl);
    // }
    return {
      atendimentos,
      dateUsToPtBr,
      getAtendimentoSelecionadoWithLastArea,
      checkAcl,
      limitarTexto,
      filterNameAreaAtendimento
    };
  },
};
</script>
