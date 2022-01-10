<template>
  <div class="card card-bordered bg-white">
    <div class="card-body">
      <h2 class="card-title text-sm">USÁRIOS CADASTRADOS</h2>
      <div class="justify-end float-right">
        <div class="py-2 relative mx-auto text-gray-600">
          <input
            class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Buscar"
          />
          <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
            <svg
              id="Capa_1"
              class="text-gray-600 h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style="enable-background: new 0 0 56.966 56.966"
              xml:space="preserve"
              width="512px"
              height="512px"
            >
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <table class="table-tail table-tail-adm">
          <thead class="text-whitetheme-9 bg-whitetheme-1 dark:bg-darktheme-7">
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Data de nascimento</th>
              <th>CPF</th>
              <th>E-mail</th>
            </tr>
          </thead>
          <!-- @click="selectUserAtendimento(user.ID)" -->
          <tbody class="text-left">
            <tr v-for="user in users" :key="user.ID">
              <td>{{ user.ID }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.cellphone }}</td>
              <td>{{ dateUsToPtBr(user.birth_date) }}</td>
              <td>{{ user.cpf }}</td>
              <td>{{ user.email }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { inject, onBeforeMount } from "vue";
import { dateUsToPtBr } from "@/helpers/dates/helpersDates";
// import Administrador from "@/views/layouts/administrador/Administrador.vue";

export default {
  components: {
    // Administrador,
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const useUsers = inject("users");
    const useAtendimentos = inject("atendimentos");
    // const { selectUserAtendimento } = useAtendimentos;
    const { users, getAllUsers } = useUsers;
    onBeforeMount(async () => {
      await getAllUsers();
    });
    return { users, dateUsToPtBr };
  },
};
</script>
