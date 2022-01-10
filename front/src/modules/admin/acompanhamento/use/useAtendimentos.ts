import useHttpAtendimentos from "./useHttpAtendimentos";

import { reactive, toRefs } from "vue";
import router from "@/router/index";
import { dateJstoUs, getJsHour } from "@/helpers/dates/helpersDates";

const HttpAtendimentos = new useHttpAtendimentos();


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useAtendimentos = () => {
  const state = reactive({
    atendimentos: {},
    atendimento: {
      ID: -0 as any,
      recepcionista: "",
      cliente: "",
      telefone: "",
      data: dateJstoUs(new Date()),
      hora: getJsHour(new Date()),
      assunto: "",
      status: 0,
      valor: 0 as any,
    },
    open_area_atendimento:{
       ID: -0 as any,
      service_id: -0 as any,
      atendente: "",
      area: "",
      historico: "",
      servico: "",
      status: 0
    },
    encaminhamento: "",
      new_area_atendimento:{
       ID: -0 as any,
      service_id: -0 as any,
      atendente: "",
      area: "",
      historico: "",
      servico: "",
      status: 0
    },
    closed_area_atendimento:{},
    inputsUserAtendimentos: {},
    idUserSelected: -0,
  });
  function validAddAtendimento(){
    if(state.atendimento.recepcionista && state.atendimento.cliente && state.open_area_atendimento.area){
      return true
    }else{
      return false
    }
  }
  async function updateAtendimento() {
    return await HttpAtendimentos.updateAtendimento(state.atendimento)
      .then((res) => {
        if (res) {          
          router.push({ name: "Atendimentos" });
        }
      })
      .catch((err) => {
        console.log("Erro updateAtendimento");
        console.log(err.response.data);
      });
  }

  function filterNameAreaAtendimento(area:string){    
    if(area){
      if(area ==="1"){return "Advocacia"}
      if(area ==="2") return "Arquitetura"
      if(area ==="3") return "Certificação digital"
      if(area ==="4") return "Comunicação"
      if(area ==="5") return "Contabilidade"
      if(area ==="6") return "Cursos"
      if(area ==="7") return "Despachante"
      if(area ==="8") return "Engenharia"
      if(area ==="9") return "Financeiro"
      if(area ==="10") return "Imobiliária"
      if(area ==="11") return "Investimento"
      if(area ==="12") return "Medicina"
      if(area ==="13") return "Oalbank"
      if(area ==="14") return "Projetos"
      if(area ==="15") return "Serviços cartorário"
    }
  }

  async function setEncaminhamento(){
    if (state.encaminhamento) {
      state.new_area_atendimento.service_id = state.atendimento.ID
      state.new_area_atendimento.area = state.encaminhamento;
      if (state.new_area_atendimento.ID) {
        delete state.new_area_atendimento.ID;
      }      
      await HttpAtendimentos.createAreaAtendimento(state.new_area_atendimento).then((resAreaAtendimento)=>{        
        state.encaminhamento = ""
        router.push({ name: "Atendimentos" });
      })                
    } else {
      router.push({ name: "Atendimentos" });
    }
  }

  async function finishAtendimento() {
    if (state.encaminhamento) {
      state.atendimento.status = 0;
      state.open_area_atendimento.status = 1
    }else{
      state.atendimento.status = 1;
      state.open_area_atendimento.status = 1
    }

    return await HttpAtendimentos.updateAtendimento(state.atendimento)
      .then(async(res) => {
        if (res) {        
          await HttpAtendimentos.updateAreaAtendimento(state.open_area_atendimento).then(async ()=>{               
              router.push({ name: "Atendimentos" });
            }).catch((err) => {
        console.log("abaixo erro updateAreaAtendimento");
        console.log(err.response.data);
        
      });
         await setEncaminhamento()
        }
      })
      .catch((err) => {
        console.log("abaixo erro updateAtendimento");
        console.log(state.atendimento.valor)
        console.log(err.response.data);
      });
  }


  async function getAtendimentoSelecionado(id: number) {
    return await HttpAtendimentos.selectAtendimentoId(id)
      .then((res) => {
        if (res) {
          state.atendimento = res.data.data;
          if(res.data.data.open_area_services[0]){
            state.open_area_atendimento = res.data.data.open_area_services[0];
         
          }
          router.push({ name: "emAtendimento" });
        }
      })
      .catch((err) => {
        console.log("abaixo erro login");
        console.log(err.response.data.erro);
      });
  }
function setAtendimentoValue(value:number){
  state.atendimento.valor = value
}
  async function getAtendimentoSelecionadoWithLastArea(id: number) {
    return await HttpAtendimentos.selectAtendimentoIdComUltimaArea(id)
      .then((res) => {
        if (res) {               
          state.atendimento = res.data.data;
          
          state.open_area_atendimento = res.data.data.open_area_services[0];          
          router.push({ name: "emAtendimento" });
        }
      })
      .catch((err) => {
        console.log("abaixo erro login");
        console.log(err.response.data.erro);
      });
  }

  async function addAtendimento() {
    if(validAddAtendimento()){
    const dataAtualJs = new Date();
    state.atendimento.data = dateJstoUs(dataAtualJs);
    state.atendimento.hora = getJsHour(dataAtualJs);
    state.atendimento.status = 0;
    if (state.atendimento.ID) {
      delete state.atendimento.ID;
    }
    if (state.open_area_atendimento.area) {
            return await HttpAtendimentos.createAtendimento(state.atendimento)
        .then(async(res) => {
          if (res) {
            state.open_area_atendimento.service_id = res.data.data.ID
            if (state.open_area_atendimento.ID) {
              delete state.open_area_atendimento.ID;
            }
            await HttpAtendimentos.createAreaAtendimento(state.open_area_atendimento).then((resAreaAtendimento)=>{
              
              state.atendimento.ID = -0 as any
              state.atendimento.cliente = ""
              state.atendimento.telefone = ""
              state.atendimento.data = dateJstoUs(new Date())
              state.atendimento.hora = getJsHour(new Date())
              state.atendimento.assunto = ""
              state.open_area_atendimento.area = ""      
              alert("Cadastrado com sucesso!");
            })        
         }
        })
        .catch((err) => {
          console.log("abaixo erro login");
          console.log(err.response.data);
        });
    } else {
      alert("Por favor preencha o tipo de atendimento");
    }
    }else{
      alert("Por favor preencha os campos")
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
  function clearAtendimentos(){
    state.atendimento = {
      ID: -0 as any,
      recepcionista: "",
      cliente: "",
      telefone: "",
      data: dateJstoUs(new Date()),
      hora: getJsHour(new Date()),
      assunto: "",
      status: 0,
      valor: 0,
    }
  }
  return {
    ...toRefs(state),
    getAllAtendimentos,
    // selectUserAtendimento,
    addAtendimento,
    getAtendimentoSelecionado,
    getAllAtendimentosType,
    updateAtendimento,
    getAllAtendimentosPendente,
    finishAtendimento,
    getAtendimentoSelecionadoWithLastArea,
    filterNameAreaAtendimento,
    clearAtendimentos,
    setAtendimentoValue
  };
};
