<template>
  <div class="main-container">
    <!-- <UserMsg /> -->
    <ContactFilter @filter="onSetFilterBy" />
    <ContactList
      @remove="removeContact"
      v-if="contacts"
      :contacts="filteredContacts"
    />
  </div>
</template>

<script>
import { contactService } from "../services/contact.service.js";
import { eventBus } from "@/services/eventBus.service.js";
import { bitcoinService } from "@/services/bitcoin.service.js";

import ContactList from "@/cmps/contact-list.vue";
import ContactFilter from "@/cmps/contact-filter.vue";
// import UserMsg from '@/cmps/user-msg.vue'

export default {
  data() {
    return {
      contacts: null,
      filterBy: {},
    };
  },
  async created() {
    this.$store.dispatch({ type: "loadContacts" });
  },
  methods: {
    onSetFilterBy(filterBy) {
      this.filterBy = filterBy;
    },
  },
  computed: {
    contacts() {
      {
        return this.$store.getters.contacts;
      }
    },
    filteredContacts() {
      const shortContacts = this.$store.state.contactStore.contacts;
      const regex = new RegExp(this.filterBy.txt, "i");
      return shortContacts.filter((contact) => regex.test(contact.name));
    },
  },
  components: {
    ContactList,
    ContactFilter,
    // UserMsg,
  },
};
</script>

<style lang="scss">
.main-container {
  position: relative;
}
</style>
