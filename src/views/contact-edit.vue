<template>
    <h2 v-if="contact">{{ contact.name }}</h2>
  <img v-if="contact" v-bind:src="'https://robohash.org/' + contact.name + '?set=set4'" />
  <form @submit.prevent="save" v-if="contact" class="contact-edit">
    <input type="text" v-model="contact.name" />
    <input type="email" v-model="contact.email" />
    <input type="tel" v-model="contact.phone" />

    <button>Save</button>
  </form>
</template>

<script>
import { contactService } from "@/services/contact.service.js";
export default {
  data() {
    return {
      contact: null,
    };
  },
  async created() {
    const contactId = this.$route.params._id;
    if (contactId) {
      this.contact = await contactService.getContactById(contactId);
    } else {
      this.contact = contactService.getEmptyContact();
    }
  },
  methods: {
    async save() {
      await contactService.saveContact(this.contact);
      this.$router.push("/contact");
    },
  },
};
</script>
