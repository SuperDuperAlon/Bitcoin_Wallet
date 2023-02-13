import { contactService } from "../services/contact.service.js";

export const contactStore = {
  state: {
    contacts: [],
  },
  getters: {
    contacts({ contacts }) {
        // console.log("🚀 ~ file: contact.store.js:11 ~ contacts ~ contacts", contacts)
      return contacts;
    },
  },
  mutations: {
    setContacts(state, { contacts }) {
      // console.log('payload: ', payload)
      state.contacts = contacts;
      console.log(contacts);
    },
    addContact(state, { contact }) {
      state.contacts.push(contact);
    },
    removeContact(state, { contactId }) {
      const idx = state.contacts.findIndex((p) => p._id === contactId);
      state.lastRemovedContact = state.contacts[idx];
      state.contacts.splice(idx, 1);
    },
    updateContact(state, { contact }) {
      const idx = state.contacts.findIndex((p) => p._id === contact._id);
      state.contacts.splice(idx, 1, contact);
    },
  },
  actions: {
    loadContacts({ commit }) {
      contactService.getContacts().then((contacts) => {
        commit({ type: "setContacts", contacts });
        // console.log("🚀 ~ file: contact.store.js:35 ~ contactService.getContacts ~ contacts", contacts)
        
      });
    },
    async removeContact({ commit }, payload) {
      commit(payload);
      try {
        await contactService.remove(payload.contactId);
        commit({ type: "clearRemoveContact" });
      } catch (err) {
        commit({ type: "undoRemoveContact" });
        throw err;
      }
    },
    saveContact({ commit }, { contact }) {
      const actionType = contact._id ? "updateContact" : "addContact";
      return contactService.save(contact).then((savedContact) => {
        commit({ type: actionType, contact: savedContact });
        return savedContact;
      });
    },
  },
};
