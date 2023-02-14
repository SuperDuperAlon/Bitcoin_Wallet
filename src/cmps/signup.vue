<template>
  <div class="modal-overlay">
    <div class="modal">
      <form @submit.prevent="log" v-if="user" class="contact-edit">
        <input type="text" v-model="user.username" />
        <input type="password" v-model="user.password" />

        <button @click="log">Log In</button>
      </form>
      <!-- <img class="check" src="~/assets/check-icon.png" alt="" /> -->
    </div>
  </div>
</template>

<script>
import { userService } from "@/services/user.service.js";
export default {
  data() {
    return {
      user: null,
    };
  },

  created: {
    async created() {
      this.user = await userService.getEmptyCredentials();
    },
  },

  methods: {
    log() {
      this.$emit("close");
      return userService.login(this.user);

    },
  },
};
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  z-index: 20;
}

.modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
}
.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

/* h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
} */
</style>

<!-- <template>

</template>

<script>

export default {

  },
  
};
</script> -->
