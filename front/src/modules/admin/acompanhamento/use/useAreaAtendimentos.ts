import useHttpUsers from "@/modules/admin/user/use/useHttpUsers";
import useHttpAtendimentos from "./useHttpAtendimentos";

import { reactive, toRefs } from "vue";
import router from "@/router/index";

const HttpAtendimentos = new useHttpAtendimentos();

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useAtendimentos = () => {
  const state = reactive({
    open_area_atendimento:{
       ID: -0 as any,
      service_id: -0 as any,
      atendente: "",
      area: "",
      historico: "",
      servico: "",
      status: 0
    },
  });

  async function addAreaAtendimento() {     
    if (state.open_area_atendimento.ID) {
      delete state.open_area_atendimento.ID;
    }

    if (state.open_area_atendimento.area) {
      return await HttpAtendimentos.createAreaAtendimento(state.open_area_atendimento)
        .then((res) => {
          if (res) {          
            console.log(res.data.data)            
          }
        })
        .catch((err) => {
          console.log("abaixo erro login");
          console.log(err.response);
        });
    } else {
      alert("Por favor preencha o tipo de atendimento");
    }
  }
    async function updateAreaAtendimento() {
    return await HttpAtendimentos.updateAreaAtendimento(state.open_area_atendimento)
      .then((res) => {
        if (res) {          
          router.push({ name: "Atendimentos" });
        }
      })
      .catch((err) => {
        console.log("abaixo erro login");
        console.log(err.response.data);
      });
  }

  return {
    ...toRefs(state),
    // selectUserAtendimento,
    addAreaAtendimento,
    updateAreaAtendimento,
  };
};
