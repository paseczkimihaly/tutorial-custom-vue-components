import { createStore } from "vuex";

export default createStore({
  state: {
    snackbars: [],
  },
  getters: {
    getSnacks: (state) => {
      return state.snackbars;
    },
  },
  mutations: {
    pushSnackbar(state, payload) {
      state.snackbars.push(payload);
    },
  },
  actions: {
    addSnackbar(context, payload) {
      let snackbar = {
        title: "Default title",
        message: "Default message",
      };

      snackbar = Object.assign({}, snackbar, payload);
      context.commit("pushSnackbar", snackbar);
    },
  },
});
