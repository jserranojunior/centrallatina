import { reactive, toRefs } from "vue";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useModal = () => {
  const state = reactive({
    dataModal: null,
    modals: [] as any,
  });

  function updateModal(data: { name: string | number; show: any }) {
    state.modals[data.name] = data;
  }

  function addModal(data: { name: string | number; show: any }) {
    state.modals[data.name] = data;
  }

  return {
    ...toRefs(state),
    addModal,
    updateModal,
  };
};
