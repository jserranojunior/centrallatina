import useHttpUsers from "@/modules/admin/user/use/useHttpUsers";
import useHttpAtendimentos from "./useHttpAtendimentos";

import { reactive, toRefs } from "vue";
import router from "@/router/index";
import {
  dateUsToPtBr,
  dateJstoUs,
  getJsHour,
} from "@/helpers/dates/helpersDates";

const HttpUsers = new useHttpUsers();
const HttpAtendimentos = new useHttpAtendimentos();

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useAtendimentos = () => {
  const state = reactive({
    atendimentos: {},
    atendimentoSelecionado: {
      user: {},
      type: "",
      data: "",
      hora: "",
      encaminhamento: "",
    },
    inputsUserAtendimentos: {},
    idUserSelected: -0,
    userSelected: {
      name: "",
      atendimento: {
        type: "",
        user_id: -0,
        observacao: "",
      },
    },
  });

  async function updateAtendimento(data: Record<string, unknown>) {
    return await HttpAtendimentos.updateAtendimento(data)
      .then((res) => {
        if (res) {
          router.push({ name: "Atendimentos" });
        }
      })
      .catch((err) => {
        console.log("abaixo erro login");
        console.log(err.response.data.erro);
      });
  }

  async function finishAtendimento(data: Record<string, any>) {
    data.status = 1;

    return await HttpAtendimentos.updateAtendimento(data)
      .then((res) => {
        if (res) {
          if (data.encaminhamento > "") {
            addAtendimento(data).then(() => {
              router.push({ name: "Atendimentos" });
            });
          }
        }
      })
      .catch((err) => {
        console.log("abaixo erro login");
        console.log(err.response.data.erro);
      });
  }

  async function selectUserAtendimento(id: number): Promise<void> {
    state.idUserSelected = id;

    state.userSelected.atendimento.type = "";
    state.userSelected.atendimento.observacao = "";

    return await HttpUsers.getUserId(state.idUserSelected)
      .then((res) => {
        if (res) {
          state.userSelected.name = res.data.data.name;
          state.userSelected.atendimento.type = "";
          state.userSelected.atendimento.user_id = res.data.data.ID;

          router.push({ name: "setAtendimento" });
        }
      })
      .catch((err) => {
        console.log("abaixo erro login");
        console.log(err.response.data.erro);
      });
  }
  async function getAtendimentoSelecionado(id: number) {
    return await HttpAtendimentos.selectAtendimentoId(id)
      .then((res) => {
        if (res) {
          state.atendimentoSelecionado = res.data.data;
          router.push({ name: "emAtendimento" });
        }
      })
      .catch((err) => {
        console.log("abaixo erro login");
        console.log(err.response.data.erro);
      });
  }
  async function addAtendimento(data: Record<string, unknown>) {
    const dataAtualJs = new Date();
    data.data = dateJstoUs(dataAtualJs);
    data.hora = getJsHour(dataAtualJs);
    data.status = 0;
    data.encaminhamento = "";

    if (data.ID) {
      delete data.ID;
    }

    if (data.type) {
      return await HttpAtendimentos.createAtendimento(data)
        .then((res) => {
          if (res) {
            state.inputsUserAtendimentos = res.data.data;
            console.log(state.inputsUserAtendimentos);

            router.push({ name: "Recepcao" });
          }
        })
        .catch((err) => {
          console.log("abaixo erro login");
          console.log(err.response.data.erro);
        });
    } else {
      alert("Por favor preencha o tipo de atendimento");
    }
  }
  async function getAllAtendimentos() {
    return await HttpAtendimentos.getAllAtendimentos()
      .then((res) => {
        if (res) {
          state.atendimentos = res.data.data;
        }
      })
      .catch((err) => {
        console.log("abaixo erro login");
        console.log(err.response.data.erro);
      });
  }
  async function getAllAtendimentosPendente() {
    return await HttpAtendimentos.getAllAtendimentosPendente()
      .then((res) => {
        if (res) {
          state.atendimentos = res.data.data;
        }
      })
      .catch((err) => {
        console.log("abaixo erro login");
        console.log(err.response.data.erro);
      });
  }
  async function getAllAtendimentosType(type: string) {
    return await HttpAtendimentos.getAllAtendimentosType(type)
      .then((res) => {
        if (res) {
          state.atendimentos = res.data.data;
        }
      })
      .catch((err) => {
        console.log("abaixo erro login");
        console.log(err.response.data.erro);
      });
  }
  return {
    ...toRefs(state),
    getAllAtendimentos,
    selectUserAtendimento,
    addAtendimento,
    getAtendimentoSelecionado,
    getAllAtendimentosType,
    updateAtendimento,
    getAllAtendimentosPendente,
    finishAtendimento,
  };
};
