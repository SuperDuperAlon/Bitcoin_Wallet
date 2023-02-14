<template>
  <section class="preview">
    <div class="flex justify-center align-center column">
      <RouterLink :to="`/contact/${contact._id}`">
        <img
          v-bind:src="'https://robohash.org/' + contact.name + '?set=set2'"
        />
      </RouterLink>
      <div class="flex row">
        <div class="flex justify-start">
          <button class="contact">
            <h2>{{ contact.name }}</h2>
            <h3>{{ contact.phone }}</h3>
          </button>
        </div>
        <div class="flex">
          <button>Contact</button>
          <button @click="removeContact(contact._id)">X</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { contactService } from "../services/contact.service.js";
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  created() {
    this.$store.dispatch({ type: "loadContacts" });
  },
  methods: {
    async loadContacts() {
      this.contacts = await contactService.getContacts(this.filterBy)
    },
    async removeContact(contactId) {
      // const msg = {
      //   txt: `Contact ${contactId} deleted.`,
      //   type: "success",
      //   timeout: 2500,
      // };
      await contactService.deleteContact(contactId)
      this.contacts = (this.contacts).filter(
        (contact) => contact._id !== contactId
      )
      // eventBus.emit('user-msg', msg)
    },
  },
};
</script>

<style lang="scss">
.preview {
  display: flex;
  grid-template-columns: 1fr 1fr;
  flex-grow: 1;
}
</style>
