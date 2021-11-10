import useHttpReset from "./useHttpReset";

import { reactive, toRefs } from "vue";
// import { useRouter } from 'vue-router'

const HttpReset = new useHttpReset();
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useResetPassword = () => {
  const state = reactive({
    reset: { erro: "", token: "", data: "" },
    email: "",
    pass: "",
    verifyToken: false,
    updatedUserPassword: false,
  });
  async function verifyTokenEmailReset(token: string) {
    if (token > "") {
      return await HttpReset.getVerifyTokenEmailReset(token)
        .then((res) => {
          if (res && res.data) {
            state.verifyToken = true;
          }
          console.log(res);
        })
        .catch((err) => {
          console.log("abaixo erro verify token");
          console.log(err.response.data);
        });
    } else {
      console.log(token);
    }
  }

  async function updatePassword(token: string) {
    if (token > "" && state.pass > "") {
      const data = {
        password: state.pass,
      };
      return await HttpReset.setNewPassword(token, data)
        .then((res) => {
          console.log(res);
          if (res && res.data && res.data.data && res.data.data.ID) {
            console.log(res.data.data.ID);
            state.updatedUserPassword = true;
            return true;
          }
        })
        .catch((err) => {
          console.log("abaixo erro verify token");
          console.log(err.response.data.err);
          state.updatedUserPassword = false;
          return false;
        });
    } else {
      console.log(token);
      return false;
    }
  }

  async function sendResetEmail() {
    state.reset.erro = "";
    state.reset.data = "";
    if (state.email) {
      state.reset.data = "Enviando e-mail, aguarde...";
      return await HttpReset.SendTokenResetEmail(state.email)
        .then((res) => {
          if (res && res.data) {
            state.reset.data = res.data.message;
          }
          console.log(res);
        })
        .catch((err) => {
          console.log("abaixo erro login");
          console.log(err.response.data.erro);
          state.reset.erro = err.response.data.erro;
        });
    } else {
      state.reset.erro = "Campos Vazios";
    }
  }

  return {
    ...toRefs(state),
    sendResetEmail,
    verifyTokenEmailReset,
    updatePassword,
  };
};
