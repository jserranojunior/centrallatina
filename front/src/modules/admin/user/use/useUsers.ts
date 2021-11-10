import useHttpUsers from "./useHttpUsers";

import { reactive, toRefs } from "vue";
import router from "@/router/index";
import { datePtBrToUs, dateUsToPtBr } from "@/helpers/dates/helpersDates";

const HttpUsers = new useHttpUsers();
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useUsers = () => {
  const state = reactive({
    users: {},
    idUserSelected: -0,
    updateInputs: {
      type: "",
      email: "",
      cpf: "",
      birth_date: "",
      dtBirth: "",
      password: undefined,
    },
  });

  async function selectUser(id: number) {
    // PUXAR USUARIO AQUI
    state.idUserSelected = id;
    return await HttpUsers.getUserId(state.idUserSelected)
      .then((res) => {
        if (res) {
          state.updateInputs = res.data.data;
          state.updateInputs.dtBirth = dateUsToPtBr(res.data.data.birth_date);
          state.updateInputs.password = undefined;
          console.log(state.updateInputs);
          router.push({ name: "EditUser" });
        }
      })
      .catch((err) => {
        console.log("abaixo erro login");
        console.log(err.response.data.erro);
      });
  }
  async function updateUser(data: Record<string, unknown>, dtBirth: string) {
    // PUXAR USUARIO AQUI
    data.birth_date = datePtBrToUs(dtBirth);
    state.updateInputs.password = undefined;
    return await HttpUsers.updateUserId(data)
      .then((res) => {
        if (res) {
          state.updateInputs = res.data.data;

          console.log(state.updateInputs);
          getAllUsers();
          router.push({ name: "Users" });
        }
      })
      .catch((err) => {
        console.log("abaixo erro login");
        console.log(err.response.data.erro);
      });
  }
  async function getAllUsers() {
    return await HttpUsers.getAllUsers()
      .then((res) => {
        if (res) {
          state.users = res.data.data;
        }
      })
      .catch((err) => {
        console.log("abaixo erro login");
        console.log(err.response.data.erro);
      });
  }
  return {
    ...toRefs(state),
    getAllUsers,
    selectUser,
    updateUser,
  };
};
