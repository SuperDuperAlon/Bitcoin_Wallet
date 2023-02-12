<template>
  <Line :data="data" :options="options" />
  <div v-if="marketValue">
    {{ getLabels }}
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";
import * as chartConfig from "./chartConfig.js";
import { bitcoinService } from "@/services/bitcoin.service.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default {
  data() {
    return {
      labels: null,
      datasets: null,
      marketValue: null,
    };
  },
  async created() {
    this.marketValue = await bitcoinService.getMarketPriceHistory();
    this.currRate = await bitcoinService.getRate();
  },
  components: {
    Line,
  },
  methods: {
    getLabels() {
      console.log(this.marketValue);
    },
  },
  computed: {
    convertToRealDate() {
        const timestamp = this.marketValue.values.x
        
    }
  },
  data() {
    return chartConfig;
  },
};
</script>
