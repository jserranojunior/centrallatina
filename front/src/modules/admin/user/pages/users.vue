<template>
  <Administrador>
    <template #body>
      <div class="card card-bordered bg-white">
        <div class="card-body">
          <h2 class="card-title text-sm">USÁRIOS CADASTRADOS</h2>
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

            <tbody class="text-left">
              <tr v-for="user in users" :key="user.ID" @click="selectUser(user.ID)">
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
    </template>
  </Administrador>
</template>
<script lang="ts">
import { inject, onBeforeMount } from "vue";
import { dateUsToPtBr } from "@/helpers/dates/helpersDates";
import Administrador from "@/views/layouts/administrador/Administrador.vue";

export default {
  components: {
    Administrador,
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const useUsers = inject("users");
    const { users, getAllUsers, selectUser } = useUsers;
    onBeforeMount(async () => {
      await getAllUsers();
    });
    return { users, dateUsToPtBr, selectUser };
  },
};
</script>
