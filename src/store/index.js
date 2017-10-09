import Vue from "vue";
import Vuex from "vuex";
import { postValue } from "@/api";

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
    postPinnedItem({ commit }, { clickRect, selectedValue }) {
      postValue({ clickRect, selectedValue }).then(({ data }) => {
        commit(types.ADD_PINNED_ITEM, clickRect);
      });
    }
  }
});
