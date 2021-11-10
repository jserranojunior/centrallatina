import useHttpAuth from "./useHttpAuthAdm";

import { reactive, toRefs } from "vue";
// import { useRouter } from 'vue-router'
import router from "@/router/index";

const HttpAuth = new useHttpAuth();
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useAuthAdm = () => {
  const state = reactive({
    fields: { email: "", password: "" },
    authadm: { erro: "", tokenadm: "", data: "" },
    erro: null,
    loginInputs: { email: "", password: "" },
    logged: false,
    userID: null,
  });
  async function LoginAdm() {
    state.authadm.erro = "";
    state.authadm.data = "";
    if (
      state.loginInputs &&
      state.loginInputs.email &&
      state.loginInputs.password
    ) {
      return await HttpAuth.loginadm(state.loginInputs)
        .then(async (res) => {
          if (res && res.data) {
            console.log(res.data);
            await setToken(res.data.token).then(async (response) => {
              console.log("resposta setToken" + response);
              if (response) {
                state.authadm.data = "Logado com sucesso!";
                if (state.authadm.tokenadm) {
                  state.logged = true;
                }
                await getAdminID().then(async (res) => {
                  state.userID = res;
                  router.push({ name: "Admin" });
                });
                // console.log("fazendo redirect");
              }
            });
            console.log(state.authadm.data);
          }
        })
        .catch((err) => {
          console.log("abaixo erro login");
          console.log(err.response.data.erro);
          state.authadm.erro = err.response.data.erro;
          state.logged = false;
        });
    } else {
      state.authadm.erro = "Campos Vazios";
      setToken("");
    }
  }
  function clearMessages() {
    state.authadm.erro = "";
    state.authadm.data = "";
  }
  async function isLoggedAdm() {
    if (localStorage.getItem("tokenadm") !== state.authadm.tokenadm) {
      let token: string;
      if (
        localStorage.getItem("tokenadm") != "null" ||
        localStorage.getItem("tokenadm") != "undefined" ||
        localStorage.getItem("tokenadm") != null ||
        localStorage.getItem("tokenadm") != undefined
      ) {
        token = String(localStorage.getItem("tokenadm"));
        if (state.authadm.tokenadm) {
          state.logged = true;
        }
      } else {
        token = "";
        state.logged = false;
      }

      await setToken(token).then(() => {
        if (state.authadm.tokenadm == "") {
          state.authadm.erro = "Erro ao fazer login";
          return false;
        } else {
          return true;
        }
      });
    }
    if (
      !state.authadm ||
      !state.authadm.tokenadm ||
      state.authadm.tokenadm == "" ||
      state.authadm.tokenadm == undefined ||
      state.authadm.tokenadm == "undefined" ||
      state.authadm.tokenadm == "null" ||
      state.authadm.tokenadm == null ||
      state.authadm.tokenadm.length == 0
    ) {
      return false;
    } else if (state.authadm && state.authadm.tokenadm !== "") {
      return true;
    }
  }
  async function setToken(value: string) {
    localStorage.setItem("tokenadm", value);
    state.authadm.tokenadm = value;
    if (value) {
      state.authadm.erro = "";
      return true;
    } else {
      return false;
    }
  }
  async function Logout() {
    await setToken("").then(async () => {
      state.userID = null;
      state.logged = false;
      router.push({ name: "LoginAdm" });
    });
  }
  async function getAdminID() {
    return await HttpAuth.getAdmin()
      .then((res) => {
        if (res) {
          state.userID = res.data.data.ID;
          return res.data.data.ID;
        }
      })
      .catch((err) => {
        console.log("abaixo erro ao pegar ID usuario");
        console.log(err.response.data);
      });
  }
  return {
    ...toRefs(state),
    Logout,
    LoginAdm,
    clearMessages,
    getAdminID,
    isLoggedAdm,
  };
};
