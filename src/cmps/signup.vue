<template>
    <form @submit.prevent="log" v-if="user" class="contact-edit">
      <input type="text" v-model="user.username" />
      <input type="password" v-model="user.password" />

      <button>Log</button>
    </form>
</template>

<script>
import { userService } from "@/services/user.service.js";
export default {
  data() {
    return {
      user: null,
    };
  },
  async created() {
    this.user = await userService.getEmptyCredentials();
  },
  methods: {
    log() {
      console.log(this.user);

      userService.login(this.user);
    },
  },
};
</script>
