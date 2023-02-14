<template>
  <header class="index-layout full">
    <div class="index-layout flex space-between align-center">
      <div class="logo">Bitvault</div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/contact">Contacts</RouterLink>
        <RouterLink to="/stats">Stats</RouterLink>
        <div id="indicator"></div>
      </nav>
      <div v-if="user" class="flex column">
        <h3 v-if="user">Hello {{ user.name }}</h3>
        <h3 v-if="currRate" class="mar-r4 fs12">
          BTC Price {{ getCurrValue }}
        </h3>
      </div>
      <div v-if="!user" class="flex column">
        <RouterLink to="/signup"> <button>Sign up</button></RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
import { userService } from "@/services/user.service.js";
import { bitcoinService } from "@/services/bitcoin.service.js";
export default {
  data() {
    return {
      user: null,
      currRate: null,
    };
  },
  async created() {
    this.user = await userService.getLoggedinUser();
    this.currRate = await bitcoinService.getRate();
  },
  computed: {
    getCurrValue() {
      const btcMarketValue = this.currRate.USD.last;
      return "$" + btcMarketValue.toLocaleString("US-en");
    },
    // getRealNumber(num) {
    //   return num.toLocaleString();
    // },
  },
};
</script>
