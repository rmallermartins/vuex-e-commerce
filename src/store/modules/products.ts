import shop from '../../api/shop';


export default {
  namespaced: true,
  state: {
    products: [],
  },

  actions: {
    getAllProducts({ commit }) {
      shop.getProducts((products) => {
        commit('setProducts', products);
      });
    },
  },

  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },
};
