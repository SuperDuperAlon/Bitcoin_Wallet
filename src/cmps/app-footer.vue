<template>
    <footer class="full">
      <div class="flex justify-center align-center">
        <h3>Bitvault - Made by Alon Mlievski</h3>
      </div>
    </footer>
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
    },
    computed: {
      getCurrValue() {
        const btcMarketValue = this.currRate.USD.last;
        return "$" + btcMarketValue.toLocaleString("US-en");
      },
    },
  };
  </script>
  