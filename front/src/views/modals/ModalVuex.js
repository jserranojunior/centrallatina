export default {
  state: {
    modals: {},
  },
  mutations: {
    ADD_MODAL(state, data) {
      state.modals[data.nome] = data;
    },
    TOGLE_SHOW_MODAL(state, data) {
      state.modals[data].show = !state.modals[data].show;
    },
    TOGLE_SHOW_MODAL_FIXED(state, data) {
      state.modals[data.nome].show = data.show;
    },
  },
  actions: {
    addModal(context, data) {
      context.commit("ADD_MODAL", data);
      return data;
    },
    togleShowModal(context, data) {
      context.commit("TOGLE_SHOW_MODAL", data);
    },
    togleShowModalFixed(context, data) {
      context.commit("TOGLE_SHOW_MODAL_FIXED", data);
    },
  },
};
