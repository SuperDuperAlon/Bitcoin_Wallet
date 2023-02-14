<template>
  <div class="homepage">
    <div>
      <h1 class="mar-b8 fs48">Free your money and invest with confidence</h1>
      <h3>invest in one safe and simple app.</h3>
    </div>
    <div>
      <img class="home-img" src="..//assets/imgs/bitcoin.png" alt="" />
    </div>
  </div>
  <!-- <h3 v-if="currRate">{{ getCurrValue }}</h3>
  <h3 v-if="user">{{ user.name }}</h3> -->
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

<style lang="scss">
.homepage {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: inherit;

  > * {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
