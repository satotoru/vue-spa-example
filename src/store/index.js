import Vue from "vue";
import Vuex from "vuex";
import { postPinnedItem, getPinnedItems } from "@/api";

Vue.use(Vuex);

const types = {
  ADD_PINNED_ITEM: "ADD_PINED_ITEM"
};

export default new Vuex.Store({
  state: {
    pinnedItems: []
  },
  mutations: {
    [types.ADD_PINNED_ITEM](state, item) {
      state.pinnedItems.push(item);
    }
  },
  actions: {
    postPinnedItem({ commit }, item) {
      postPinnedItem(item).then(({ data }) => {
        commit(types.ADD_PINNED_ITEM, item);
      });
    },
    getPinnedItems({ commit }) {
      getPinnedItems().then(({ data }) => {
        data.forEach((d) => commit(types.ADD_PINNED_ITEM, d))
      })
    }
  }
});
