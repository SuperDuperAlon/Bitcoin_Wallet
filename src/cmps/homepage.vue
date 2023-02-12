<template>
  <h1>this is the homepage</h1>
  <h3 v-if="currRate">{{ getCurrValue }}</h3>
  <h3 v-if="user">{{ user.name }}</h3>
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
    this.user = await userService.getUser();
    this.currRate = await bitcoinService.getRate();
  },
  computed: {
    getCurrValue() {
      const btcMarketValue = this.currRate.USD.last;
      return "$" + btcMarketValue.toLocaleString("US-en");
    },
  },
};
</script>
