import Vuex from "vuex";
import { contactStore } from "./contact.store.js";

export const myStore = Vuex.createStore({
  strict: true,
  state() {
    return {
      // count: 200000,
    };
  },
  modules: {
    contactStore,
  },
});

myStore.subscribe((cmd, state) => {
//   console.log("**** Store state changed: ****");
//   console.log("Command:", cmd.payload);
//   console.log("storeState:\n", state);
//   console.log("*******************************");
});
