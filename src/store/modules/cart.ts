export default {
  namespaced: true,
  state: {
    items: [],
    statusCheckout: null,
  },

  actions: {
    addProduct({ commit }, product) {
      commit('addProduct', product);
    },
  },

  mutations: {
    addProduct(state, product) {
      state.items.push(product);
    },
  },
};
